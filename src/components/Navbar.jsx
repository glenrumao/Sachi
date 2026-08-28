import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Navbar.css';

const LINKS = [
  { to: '/menswear', label: 'Menswear' },
  { to: '/womenswear', label: 'Womenswear' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/customized', label: 'Customized' },
  { to: '/styling', label: 'Styling' },
  { to: '/wardrobe-curation', label: 'Wardrobe Curation' },
];

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { cartCount, wishlist, setCartOpen } = useShop();
  const navigate = useNavigate();

  return (
    <header className={`nav ${transparent ? 'nav--transparent' : ''}`}>
      <div className="nav__row container">
        {/* Mobile Hamburger Button */}
        <button
          className={`nav__burger ${open ? 'is-active' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop Left Links */}
        <nav className="nav__links nav__links--left" aria-label="Primary Left">
          {LINKS.slice(0, 3).map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Centered Brand Wordmark */}
        <button className="nav__wordmark" onClick={() => navigate('/')} aria-label="House of Sachi, home">
          <span className="nav__wordmark-eyebrow">House Of</span>
          <span className="nav__wordmark-main">Sachi</span>
        </button>

        {/* Desktop Right Links */}
        <nav className="nav__links nav__links--right" aria-label="Primary Right">
          {LINKS.slice(3, 6).map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Icon Actions */}
        <div className="nav__icons">
          <div className="nav__account">
            <button
              className="nav__icon-btn"
              aria-label="Account"
              onClick={() => setAccountOpen((o) => !o)}
            >
              <IconUser />
            </button>
            {accountOpen && (
              <div className="nav__account-panel">
                <p className="nav__account-title">Welcome to Sachi</p>
                <form
                  className="nav__account-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAccountOpen(false);
                  }}
                >
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="btn btn-dark">Log In</button>
                </form>
                <p className="nav__account-alt">
                  New here? <a href="#signup">Create an account</a>
                </p>
              </div>
            )}
          </div>

          <NavLink to="/wishlist" className="nav__icon-btn" aria-label="Wishlist">
            <IconHeart />
            {wishlist.length > 0 && <span className="nav__badge">{wishlist.length}</span>}
          </NavLink>

          <button className="nav__icon-btn" aria-label="Bag" onClick={() => setCartOpen(true)}>
            <IconBag />
            {cartCount > 0 && <span className="nav__badge">{cartCount}</span>}
          </button>
        </div>

        {/* Mobile Backdrop (Click outside to close) */}
        {open && <div className="nav__mobile-overlay" onClick={() => setOpen(false)} />}

        {/* Mobile Flyout Drawer */}
        <div className={`nav__mobile-menu ${open ? 'is-open' : ''}`}>
          {/* Close "X" Button Inside Drawer */}
          <button
            className="nav__mobile-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="nav__mobile-links">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function IconUser() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 20s-7.5-4.6-9.8-9.4C.6 6.6 2.6 3.5 6 3.2c2-.2 3.6.9 4.6 2.4a5 5 0 0 1 1.4 0c1-1.5 2.6-2.6 4.6-2.4 3.4.3 5.4 3.4 3.8 7.4C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg width="18" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}