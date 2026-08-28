import { useState } from 'react';
import './ContactForm.css';

const SERVICES = ['Styling', 'Wardrobe Curation', 'Custom Order', 'Personal Shopping', 'Something else'];

export default function ContactForm({ variant = 'reach' }) {
  const [status, setStatus] = useState('idle'); // idle | sent
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const nextErrors = {};
    if (!form.get('name')?.trim()) nextErrors.name = 'Please share your name';
    if (!/^\S+@\S+\.\S+$/.test(form.get('email') || '')) nextErrors.email = 'Enter a valid email';
    if (!form.get('phone')?.trim()) nextErrors.phone = 'Please share a phone number';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // NOTE for Django integration: POST this FormData to /api/enquiries/
    setStatus('sent');
    e.target.reset();
  };

  if (variant === 'customize') {
    return (
      <section className="customize container" id="customize">
        <div className="customize__grid">
          <div className="customize__intro">
            <h2>Customize Your Emotions</h2>
            <ul className="customize__contacts">
              <li>
                <span className="eyebrow">WhatsApp | Call</span>
                <a href="tel:+919847382193">+91 98473 82193</a>
              </li>
              <li>
                <span className="eyebrow">Email</span>
                <a href="mailto:world@houseofsachi.com">world@houseofsachi.com</a>
              </li>
              <li>
                <span className="eyebrow">Instagram</span>
                <a href="https://instagram.com/house.of.sachi" target="_blank" rel="noreferrer">
                  house.of.sachi
                </a>
              </li>
            </ul>
          </div>

          <form className="customize__form" onSubmit={handleSubmit} noValidate>
            {status === 'sent' ? (
              <div className="form__success">
                <p>Thank you — your style journey has begun. We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div className="form__row">
                  <Field label="Full Name" name="name" placeholder="Priya Mehta" error={errors.name} />
                  <Field label="Phone / WhatsApp" name="phone" placeholder="+91 98200 00000" error={errors.phone} />
                </div>
                <Field label="Email Address" name="email" type="email" placeholder="priya@example.com" error={errors.email} full />
                <label className="field field--full">
                  <span className="eyebrow">Service Interested In</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="field field--full">
                  <span className="eyebrow">Tell Us About Yourself</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share a little about what you're looking for — an upcoming occasion, a wardrobe refresh, or simply a feeling you want to dress for..."
                  />
                </label>
                <button type="submit" className="btn btn-dark customize__submit">Begin My Style Journey</button>
              </>
            )}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="reach container" id="reach">
      <h2 className="reach__heading">Reach To Us</h2>
      <form className="reach__form" onSubmit={handleSubmit} noValidate>
        {status === 'sent' ? (
          <div className="form__success">
            <p>Thank you — we've received your message and will reach out soon.</p>
          </div>
        ) : (
          <>
            <div className="form__row">
              <Field label="Full Name" name="name" placeholder="Full Name" error={errors.name} bare />
              <Field label="Address" name="address" placeholder="Address" bare />
            </div>
            <div className="form__row">
              <Field label="Email" name="email" type="email" placeholder="Email" error={errors.email} bare />
              <Field label="Phone" name="phone" placeholder="Phone" error={errors.phone} bare />
            </div>
            <label className="field field--full">
              <textarea name="message" rows={6} placeholder="Message" />
            </label>
            <button type="submit" className="btn btn-dark reach__submit">Send Message</button>
          </>
        )}
      </form>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder, error, full, bare }) {
  return (
    <label className={`field ${full ? 'field--full' : ''}`}>
      {!bare && <span className="eyebrow">{label}</span>}
      <input name={name} type={type} placeholder={placeholder} aria-label={bare ? placeholder : undefined} />
      {error && <span className="field__error">{error}</span>}
    </label>
  );
}
