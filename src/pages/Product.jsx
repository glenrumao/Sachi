import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Frame from '../components/Frame';
import { categories, productsByGender } from '../data/products';
import { useShop } from '../context/ShopContext';
import './Product.css';

const PAGE_SIZE = 4;

export default function Product({ gender }) {
  const [activeCat, setActiveCat] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  const tabs = categories[gender];
  const allProducts = productsByGender[gender];

  const filtered = useMemo(
    () => (activeCat === 'All' ? allProducts : allProducts.filter((p) => p.category === activeCat)),
    [activeCat, allProducts]
  );

  const shown = filtered.slice(0, visible);
  const label = gender === 'menswear' ? 'Menswear' : 'Womenswear';

  return (
    <div>
      <Navbar />

      <section className="product-page container">
        <div className="product-page__head">
          <p className="eyebrow">{label}</p>
          <div className="product-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`product-tabs__btn ${activeCat === tab ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveCat(tab);
                  setVisible(PAGE_SIZE);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="product-list">
          {shown.map((product) => (
            <article key={product.id} className="product-row">
              <div className="product-row__images">
                <Frame tone="warm" ratio="4 / 5" />
                <Frame tone="warm" ratio="4 / 5" />
                <button
                  className={`product-row__wish ${isWishlisted(product.id) ? 'is-active' : ''}`}
                  onClick={() => toggleWishlist(product)}
                  aria-label="Toggle wishlist"
                >
                  ♥
                </button>
              </div>
              <div className="product-row__meta">
                <span className="product-row__name">{product.name}</span>
                <button className="product-row__details">Details</button>
                <button className="btn product-row__add" onClick={() => addToCart(product)}>
                  Add To Bag
                </button>
              </div>
            </article>
          ))}
        </div>

        {visible < filtered.length && (
          <button className="load-more" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Load More
          </button>
        )}
      </section>

      <ContactForm variant="customize" />
      <Footer />
    </div>
  );
}
