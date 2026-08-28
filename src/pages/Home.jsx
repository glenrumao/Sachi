import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import './Home.css';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <Navbar transparent />
        <div className="hero__content container">
          <h1>Wear Your Emotion</h1>
          <div className="hero__links">
            <Link to="/womenswear">Womenswear</Link>
            <span aria-hidden="true">/</span>
            <Link to="/menswear">Menswear</Link>
          </div>
        </div>
      </section>

      <section className="magic-hands">
        <div className="container">
          <h2>Magic Hands</h2>
          <p>Every piece touched by hand, before it ever touches you.</p>
        </div>
      </section>

      <section className="split">
        <Link to="/styling" className="split__tile split1">
          <div className="split__content">
            <h3>Styling</h3>
            <span className="split__cta">Discover</span>
          </div>
        </Link>
        <Link to="/wardrobe-curation" className="split__tile split2">
          <div className="split__content">
            <h3>Wardrobe Curation</h3>
            <span className="split__cta">Explore</span>
          </div>
        </Link>
      </section>

      <ContactForm variant="customize" />
      <Footer />
    </div>
  );
}