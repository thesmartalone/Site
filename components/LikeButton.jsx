'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, onSnapshot, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Per-browser id, same key the old site used so existing likes keep working.
function getUserId() {
  let uid = localStorage.getItem('smartalone_uid');
  if (!uid) {
    uid = 'user_' + Math.random().toString(36).slice(2) + Date.now();
    localStorage.setItem('smartalone_uid', uid);
  }
  return uid;
}

export default function LikeButton({ postId, className = 'card-like' }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const userId = getUserId();
    const likeRef = doc(db, 'likes', `${postId}_${userId}`);
    const countRef = doc(db, 'likes_count', postId);
    let active = true;

    getDoc(likeRef)
      .then((snap) => {
        if (active) setLiked(snap.exists() && snap.data().liked === true);
      })
      .catch((err) => console.warn('Could not read like state:', err));

    const unsub = onSnapshot(
      countRef,
      (snap) => {
        if (active) setCount(Math.max(0, Number(snap.data()?.count || 0)));
      },
      (err) => console.warn('Could not read like count:', err)
    );

    return () => {
      active = false;
      unsub();
    };
  }, [postId]);

  async function handleClick() {
    if (busy) return;
    const next = !liked;
    const prevLiked = liked;

    // Optimistic UI update
    setBusy(true);
    setLiked(next);
    setCount((c) => Math.max(0, c + (next ? 1 : -1)));

    try {
      const userId = getUserId();
      await setDoc(
        doc(db, 'likes', `${postId}_${userId}`),
        { liked: next, userId, postId },
        { merge: true }
      );
      await setDoc(
        doc(db, 'likes_count', postId),
        { count: increment(next ? 1 : -1) },
        { merge: true }
      );
    } catch (err) {
      console.error('Like update failed:', err);
      // Roll back if Firebase rejects the write
      setLiked(prevLiked);
      setCount((c) => Math.max(0, c + (next ? -1 : 1)));
    } finally {
      setBusy(false);
    }
  }

  const classes = ['like-btn', className, liked ? 'liked' : '', busy ? 'is-loading' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
      disabled={busy}
      aria-label="Like"
      aria-pressed={liked}
    >
      <i className="fas fa-heart" />
      <span className="like-count">{count}</span>
    </button>
  );
}
