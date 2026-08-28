import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Product from './pages/Product';
import Styling from './pages/Styling';
import WardrobeCuration from './pages/WardrobeCuration';
import Customized from './pages/Customized';
import Wishlist from './pages/Wishlist';

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/menswear" element={<Product gender="menswear" />} />
          <Route path="/womenswear" element={<Product gender="womenswear" />} />
          <Route path="/styling" element={<Styling />} />
          <Route path="/wardrobe-curation" element={<WardrobeCuration />} />
          <Route path="/customized" element={<Customized />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <CartDrawer />
        <Toast />
      </BrowserRouter>
    </ShopProvider>
  );
}
