import Product from '../components/product';

function HomePage() {
  return (
    <div className="mr-10 ml-10 mt-5 ">
      <div className="flex flex-wrap justify-start">
        <Product />
      </div>
    </div>
  );
}

export default HomePage;
