import { useEffect, useState } from 'react';

function Product() {
  const url = 'https://v2.api.noroff.dev/online-shop';

  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer flex justify-center items-center flex-col box-border border w-60 m-5 hover:scale-110 transition ease delay-110 "
        >
          <img
            className="object-scale-down w-32 h-32 mt-10"
            src={product.image.url}
          />
          <h1 className="mt-5">{product.title}</h1>
          <p className="font-bold mt-2 mb-5">{product.discountedPrice} NOK</p>
        </div>
      ))}
    </>
  );
}

export default Product;
