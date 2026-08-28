import './Footer.css';

const LINKS = [
  'Our Story', 'Contact', 'Terms and Conditions', 'Privacy Policy',
  'Return & Exchange', 'Shipping', 'FAQs',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <nav className="footer__links" aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </nav>
        <p className="footer__copy">House of Sachi &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
