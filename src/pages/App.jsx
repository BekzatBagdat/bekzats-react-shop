import { Routes, Route } from 'react-router-dom';
import 'typeface-inter';
import Nav from '../components/nav';
import Footer from '../components/footer';

function Home() {
  return <div>Home</div>;
}
function Contact() {
  return <div>Contact page</div>;
}
function App() {
  return (
    <div id="main-container" className="flex flex-col min-h-screen">
      <header>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </header>
      <main></main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
