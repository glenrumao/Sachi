import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import './Customized.css';

const STEPS = [
  { title: 'Share Your Vision', body: 'Tell us the occasion, the feeling, and any references you already love.' },
  { title: 'Design Consultation', body: 'A one-on-one conversation to translate that vision into fabric, cut, and embroidery.' },
  { title: 'Made By Hand', body: 'Our artisans bring the piece to life, with fittings along the way to get it exactly right.' },
];

export default function Customized() {
  return (
    <div>
      <PageHero title="Customized" />

      <section className="customized-intro container">
        <p>
          Some pieces can't be found off a rack — they have to be made for you. Our
          customized service pairs you directly with the Sachi design team to build a
          garment around your story, your body, and your occasion.
        </p>
      </section>

      <section className="customized-steps container">
        {STEPS.map((step, i) => (
          <div className="customized-step" key={step.title}>
            <span className="customized-step__index">{String(i + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </section>

      <ContactForm variant="customize" />
      <Footer />
    </div>
  );
}
