# House of Sachi — Website

React + Vite frontend for House of Sachi, built from the provided Figma/PDF designs.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Pages

- `/` — Home
- `/our-story` — Our Story / About
- `/menswear`, `/womenswear` — shared Product template, nav-labeled differently
- `/styling` — Styling
- `/wardrobe-curation` — Wardrobe Curation
- `/customized` — Customized (new page, not in original PDFs, built to match theme since it was already a nav link)
- `/wishlist` — Wishlist

## What's functional right now (frontend only)

- Full client-side routing and responsive nav (hamburger on mobile)
- Add to Bag / cart drawer with quantity controls, persisted to localStorage
- Wishlist toggle, persisted to localStorage, with its own page
- Category filtering + Load More on product pages
- Contact / "Customize Your Emotions" / "Reach to Us" forms with client-side validation
  and a success state on submit
- Login/signup panel UI (not yet wired to real auth)

## Connecting to the Django backend

Every point that should talk to a real API is marked with a `// NOTE for Django
integration` comment. In short, you'll want to:

1. `src/data/products.js` — replace the mock arrays with a `fetch('/api/products/?category=...')`
   call (e.g. in a `useEffect` inside `Product.jsx`)
2. `src/context/ShopContext.jsx` — swap the local state mutations for calls to
   `/api/cart/` and `/api/wishlist/` (still keep localStorage as an optimistic-UI layer if
   you like, or drop it once the backend is the source of truth)
3. `src/components/ContactForm.jsx` — POST the form data to `/api/enquiries/`
4. `src/components/Navbar.jsx` — wire the login form to `/api/auth/login/` (and add a
   signup form/page backed by `/api/auth/register/`)
5. Product photography — every image is currently a styled placeholder
   (`src/components/Frame.jsx`). Once real photos are ready, swap the `<Frame />` calls
   for `<img src={product.image} />` — the data shape already expects an `image` field.

## Design tokens

Colors, fonts, and spacing are centralized in `src/index.css` as CSS variables, so the
whole palette (ink, sand, gold accent) can be retuned from one place.
