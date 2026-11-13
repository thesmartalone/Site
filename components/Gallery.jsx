import PhotoCard from '@/components/PhotoCard';
import FirebasePosts from '@/components/FirebasePosts';

export default function Gallery() {
  return (
    <section className="gallery-section" id="portfolio">
      <div className="section-header">
        <h2 className="section-title">
          More <strong>Frames</strong>
        </h2>
        <a className="section-sub" href="#portfolio">
          <i className="fas fa-arrow-right" /> See All
        </a>
      </div>

      <div className="gallery-grid">
        <PhotoCard
          postId="card-rooftop"
          media={<img src="/assets/images/photo2.jpg" alt="Bhim Majhi rooftop photo" title="Bhim Majhi rooftop photo" />}
          title="Rooftop View"
          meta="Portrait · 2026"
          tag="#sunset"
        />
        <PhotoCard
          postId="card-neondusk"
          media={
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop"
              alt="Neon Dusk cinematic photo"
              title="Neon Dusk cinematic photo"
            />
          }
          title="Neon Dusk"
          meta="Night · 2026"
          tag="#cinematic"
        />
        <PhotoCard
          postId="card-earthsky"
          media={
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
              alt="Earth and Sky landscape photo"
              title="Earth and Sky landscape photo"
            />
          }
          title="Earth & Sky"
          meta="Landscape · 2025"
          tag="#minimal"
        />

        {/* Firebase posts appear here automatically, in real time. */}
        <FirebasePosts />
      </div>
    </section>
  );
}
