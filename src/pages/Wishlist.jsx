import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Frame from '../components/Frame';
import { useShop } from '../context/ShopContext';
import './Wishlist.css';

const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function Wishlist() {
  const { wishlist, addToCart, toggleWishlist } = useShop();

  return (
    <div>
      <Navbar />
      <section className="wishlist-page container">
        <h1>Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="wishlist-page__empty">Nothing saved yet — tap the heart on any piece to keep it here.</p>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <article className="wishlist-card" key={product.id}>
                <Frame tone="warm" ratio="4 / 5" />
                <p className="wishlist-card__name">{product.name}</p>
                <p className="wishlist-card__price">{formatINR(product.price)}</p>
                <div className="wishlist-card__actions">
                  <button className="btn" onClick={() => addToCart(product)}>Add To Bag</button>
                  <button className="wishlist-card__remove" onClick={() => toggleWishlist(product)}>Remove</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
