import 'typeface-inter';
import Nav from '../components/nav';
import Footer from '../components/footer';

function App() {
  return (
    <div id="main-container" className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>
      <main></main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
