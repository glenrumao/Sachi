import PageHero from '../components/PageHero';
import ThreeCardSection from '../components/ThreeCardSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const CARDS = [
  {
    title: 'Visual Styling',
    body: 'A considered edit of silhouette, colour, and texture — built around how you move and how you want to be seen.',
    img: '/images/styling1.webp',
  },
  {
    title: 'Occasional Styling',
    body: 'From intimate ceremonies to grand celebrations, an outfit story tailored to the weight of the occasion.',
    img: '/images/styling2.webp',
  },
  {
    title: 'Personal Shopping',
    body: 'One-on-one sourcing across our collections and artisan network, curated entirely around you.',
    img: '/images/styling3.webp',
  },
];

export default function Styling() {
  return (
    <div>
      <PageHero title="Styling" />
      <ThreeCardSection cards={CARDS} />
      <ContactForm variant="reach" />
      <Footer />
    </div>
  );
}
