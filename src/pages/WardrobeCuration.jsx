import PageHero from '../components/PageHero';
import ThreeCardSection from '../components/ThreeCardSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const CARDS = [
  {
    title: 'Wardrobe Curation / Capsule Wardrobe',
    body: 'A pared-back, considered edit built around pieces you already own, layered with intentional new additions.',
  },
  {
    title: 'Trend Guideline',
    body: 'Seasonal direction filtered through what genuinely suits you — no noise, just the pieces worth investing in.',
  },
  {
    title: 'Body Type and Colour Analysis',
    body: 'A personal reference for the cuts, drapes, and palettes that consistently work in your favour.',
  },
];

export default function WardrobeCuration() {
  return (
    <div>
      <PageHero title="Wardrobe Curation" />
      <ThreeCardSection cards={CARDS} />
      <ContactForm variant="reach" />
      <Footer />
    </div>
  );
}
