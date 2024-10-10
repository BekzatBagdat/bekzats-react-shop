import ProductCard from '../components/productCard';

function HomePage() {
  return (
    <div className="mr-10 ml-10 mt-5 ">
      <div className="flex flex-wrap justify-start">
        <ProductCard />
      </div>
    </div>
  );
}

export default HomePage;
