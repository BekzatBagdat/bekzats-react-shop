import 'typeface-inter';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import HomePage from './homepage';
import ContactPage from './contactpage';
import CartPage from './cartpage';
import ProductPage from './productpage';
import { CartProvider } from '../utils/cartcontext';
import SuccessPage from './successpage';

function App() {
  return (
    <div id="main-container" className="flex flex-col min-h-screen">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="productpage/:id" element={<ProductPage />} />
            <Route path="successpage" element={<SuccessPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
