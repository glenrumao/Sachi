import { useShop } from '../context/ShopContext';
import './CartDrawer.css';

const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal } = useShop();

  return (
    <>
      <div
        className={`cart-scrim ${cartOpen ? 'is-open' : ''}`}
        onClick={() => setCartOpen(false)}
        aria-hidden={!cartOpen}
      />
      <aside className={`cart-drawer ${cartOpen ? 'is-open' : ''}`} aria-label="Shopping bag" aria-hidden={!cartOpen}>
        <div className="cart-drawer__head">
          <h3>Your Bag</h3>
          <button aria-label="Close bag" onClick={() => setCartOpen(false)}>&times;</button>
        </div>

        {cart.length === 0 ? (
          <p className="cart-drawer__empty">Your bag is empty. Every piece deserves a moment — go find yours.</p>
        ) : (
          <>
            <ul className="cart-drawer__list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item__swatch" />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__price">{formatINR(item.price)}</p>
                    <div className="cart-item__qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                  <button className="cart-item__remove" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Subtotal</span>
                <span>{formatINR(cartTotal)}</span>
              </div>
              <button className="btn btn-dark cart-drawer__checkout">Checkout</button>
              <p className="cart-drawer__note">Shipping and taxes calculated at checkout.</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
