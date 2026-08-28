import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ShopContext = createContext(null);

const load = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => load('sachi_cart'));
  const [wishlist, setWishlist] = useState(() => load('sachi_wishlist'));
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('sachi_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('sachi_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  // NOTE for Django integration: replace these local mutations with API calls,
  // e.g. POST /api/cart/, DELETE /api/cart/:id, POST /api/wishlist/ ...
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setToast(`${product.name} added to bag`);
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)).filter((i) => i.qty > 0)
    );

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        setToast(`Removed from wishlist`);
        return prev.filter((i) => i.id !== product.id);
      }
      setToast(`Added to wishlist`);
      return [...prev, product];
    });
  };

  const isWishlisted = (id) => wishlist.some((i) => i.id === id);

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, i) => sum + i.qty * (i.price || 0), 0), [cart]);

  const value = {
    cart,
    wishlist,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    updateQty,
    toggleWishlist,
    isWishlisted,
    cartCount,
    cartTotal,
    toast,
    setToast,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
