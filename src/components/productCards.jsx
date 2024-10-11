import { useEffect, useState } from 'react';

function ProductCards() {
  /*Search Functionality*/
  const [inputValue, setInputValue] = useState('');

  const searchProducts = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  /* API call, getting Products data*/
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
  }, [setProducts]);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className="mr-10 ml-10 mt-5">
        <form className="mb-10 mt- mx-auto bg-black">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-white border border-white rounded-lg bg-black"
              placeholder="Find Products"
              onChange={searchProducts}
              required
            />
          </div>
        </form>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap justify-center">
            {products
              .filter((product) =>
                product.title.toLowerCase().includes(inputValue)
              )
              .map((product) => (
                <div
                  key={product.id}
                  className="m-5 cursor-pointer flex justify-center items-center flex-col box-border border w-52 hover:scale-110 transition ease delay-110 "
                >
                  <img
                    className="object-scale-down w-32 h-32 mt-10"
                    src={product.image.url}
                    alt={product.title}
                  />
                  <h1 className="mt-5">{product.title}</h1>
                  <p className="font-bold mt-2 mb-5">
                    {product.discountedPrice} NOK
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
