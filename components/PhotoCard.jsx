import LikeButton from '@/components/LikeButton';

// One card, same markup and styling for static and Firebase posts.
export default function PhotoCard({ postId, media, title, meta, tag }) {
  return (
    <div className="gallery-card">
      {media}
      <div className="card-overlay">
        <h3>{title}</h3>
        <div className="card-meta">{meta}</div>
        <span className="card-tag">{tag}</span>
      </div>
      <LikeButton postId={postId} className="card-like" />
    </div>
  );
}
