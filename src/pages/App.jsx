import 'typeface-inter';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import HomePage from './homepage';
import ContactPage from './contactpage';
import CartPage from './cartpage';

function App() {
  return (
    <div id="main-container" className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
