import { useCart } from '../utils/cartcontext';
import { useNavigate } from 'react-router-dom';
function CartProducts() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const showTotalPrice = cart
    .reduce(
      (totalPrice, product) => totalPrice + product.data.discountedPrice,
      0
    )
    .toFixed(2);

  const proceedToCheckout = () => {
    navigate(`/successpage`);
    clearCart();
  };

  return (
    <div>
      <div className="mt-10 ml-10 mr-10">
        {cart.length === 0 ? (
          <p className="text-2xl text-center mt-12">Your cart is empty :/</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div
                key={product.data.id}
                className="border-y border-t-0 mb-5 flex justify-between"
              >
                <div className="flex flex-col justify-center">
                  <h1 className="mt-2 mb-5 font-bold">{product.data.title}</h1>
                  <p className="mb-2 text-yellow">
                    {product.data.discountedPrice} NOK
                  </p>
                </div>
                <img src={product.data.image.url} className="max-w-24" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-20 border-t-2 border-gray flex justify-center flex-col items-center">
        <p className="text-3xl font-medium mt-5">Total:</p>
        <p className="mt-5 text-green font-medium">{showTotalPrice} NOK</p>
        <button
          onClick={proceedToCheckout}
          className="mt-5 mb-5  text-white bg-transparent font-semibold  py-2 px-4 border border-white hover:text-black hover:bg-white hover:border-transparent rounded"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartProducts;
