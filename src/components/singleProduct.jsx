import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../utils/cartcontext';

function SingleProduct() {
  const { addToCart } = useCart();
  let params = useParams();
  let productId = params.id;
  /* API call, getting Products data*/
  const url = `https://v2.api.noroff.dev/online-shop/${productId}`;

  const [product, setProduct] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    }

    getData();
  }, [setProduct]);

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error loading data</div>;
  if (!product) return <div>Product not found :/</div>;

  //Data variables
  const title = product.data.title;
  const discountedPrice = product.data.discountedPrice;
  const price = product.data.price;
  const id = product.data.id;
  const description = product.data.description;
  const image = product.data.image.url;
  const alt = product.data.image.alt;
  // Data variables reviews
  const reviews = product.data.reviews;

  // Calculate discount
  const discount = price > discountedPrice ? price - discountedPrice : 0;
  const discountPercentage = discount
    ? Math.round((discount / price) * 100)
    : 0;

  return (
    <>
      <div className="mt-10 ml-10 mr-10 flex flex-wrap  justify-center content-center ">
        <div className="mb-5 flex-5 pr-5">
          <img src={image} alt={alt} />
        </div>
        <div>
          <h1 className=" text-4xl font-bold pb-2">{title}</h1>
          <div className="flex flex-wrap justify-between">
            <h2
              className={`pb-2 text-3xl font-bold ${
                discountPercentage > 0 && 'text-red'
              }`}
            >
              {discountedPrice} NOK
            </h2>

            <div
              className={`mb-2 bg-red text-center border-radius-30 ${
                discountedPrice === price && 'hidden'
              }`}
            >
              <p className="text font-bold m-2">{discountPercentage}% off</p>
            </div>
          </div>

          <p className="mb-10">{id}</p>
          <p>{description}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full mt-5 mb-5  text-white bg-transparent font-semibold  py-2 px-4 border border-white hover:text-black hover:bg-white hover:border-transparent rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-10 ml-10 mr-10 flex justify-center flex-wrap">
        {reviews.map((review) => (
          <div key={review.id} className="border p-10 w-full  mb-5 ">
            <h1 className="text-xl">{review.username}</h1>
            <p className="font-bold text-yellow">Rating: {review.rating}/5</p>
            <p>&quot;{review.description}&quot;</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SingleProduct;
