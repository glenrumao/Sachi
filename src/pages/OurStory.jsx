import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Frame from '../components/Frame';
import './OurStory.css';

export default function OurStory() {
  return (
    <div>
      <PageHero title="About Sachi" bgImage="/images/about1.webp" />

      <section className="story container">
        <p className="eyebrow story__name">Chelsi</p>
        <blockquote className="story__quote">
          "I was amazed by how important outfits are in celebrations — how they hold
          memories, emotions, and moments that stay forever. Sachi was born from this
          belief that clothing is emotion stitched into form."
        </blockquote>

        <div className="story__body">
          <p>
            The name Sachi grew from a personal bond during my hostel days, and over
            time, it became a symbol of individuality, authenticity, and movement.
          </p>
          <p>
            My journey deepened while working with Rahul Mishra, where I witnessed the
            brilliance of Indian craftsmanship — its artistry, detail, and heritage.
            With Sachi, I wanted to celebrate this legacy in a way that feels light,
            modern, and deeply personal.
          </p>
          <p>
            Sachi began with the saree — our first love. Through delicate embroidery
            and thoughtful design, each piece blends heritage with ease, luxury with
            effortlessness, and is crafted to mirror emotions that speak to you.
          </p>
          <p>
            At its heart, Sachi is about people. Every creation carries the story of
            master artisans who pour their skill and passion into every detail,
            bringing timeless beauty to life.
          </p>
        </div>
      </section>

      <section className="story-gallery">
        {Array.from({ length: 6 }).map((_, i) => (
          <Frame key={i} tone={i % 2 === 0 ? 'mono' : 'paper'} ratio="4 / 5" />
        ))}
      </section>

      <ContactForm variant="customize" />
      <Footer />
    </div>
  );
}
