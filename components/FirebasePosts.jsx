'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import PhotoCard from '@/components/PhotoCard';

function formatDate(value) {
  return value?.toDate
    ? value.toDate().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
    : '2026';
}

// Real-time posts from Firestore, rendered as normal gallery cards.
export default function FirebasePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        setPosts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (err) => console.error('Firebase posts error:', err)
    );
    return unsub;
  }, []);

  return (
    <>
      {posts.map((post) => {
        const isVideo = post.mediaType === 'video';
        const alt = post.seoAlt || post.title || 'Bhim Majhi photo';
        const seoTitle = post.seoTitle || post.title || 'Bhim Majhi Photo';

        const media = isVideo ? (
          <video src={post.mediaUrl} controls playsInline preload="metadata" title={seoTitle} />
        ) : (
          <img src={post.mediaUrl} alt={alt} title={seoTitle} loading="lazy" />
        );

        return (
          <PhotoCard
            key={post.id}
            postId={post.id}
            media={media}
            title={post.title || 'New Frame'}
            meta={`${isVideo ? 'Video' : 'Photo'} · ${formatDate(post.createdAt)}`}
            tag={post.tag || '#smartalone'}
          />
        );
      })}
    </>
  );
}
