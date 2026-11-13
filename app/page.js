import Particles from '@/components/Particles';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <>
      <Particles />
      <div className="premium-aura" aria-hidden="true" />
      <div className="premium-aura-2" aria-hidden="true" />
      <div className="glow-orb" />
      <div className="glow-orb-2" />

      <div className="container">
        <Header />
        <Hero />
        <Gallery />
        <Testimonial />
      </div>
    </>
  );
}
