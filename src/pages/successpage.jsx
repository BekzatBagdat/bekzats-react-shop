import { useNavigate } from 'react-router-dom';

function SuccessPage() {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate(`/`);
  };
  return (
    <div className="flex flex-col text-center mt-20 mx-10">
      <h1 className="text-green text-2xl font-bold">Order Confirmed! ✅</h1>
      <p className="mt-2 mb-10">
        Your order is currently being processed. You will receive an order
        confirmation in your email.{' '}
      </p>
      <button
        onClick={backToHomePage}
        className=" mt-5 mb-5  text-white bg-transparent font-semibold  py-2 px-4 border border-white hover:text-black hover:bg-white hover:border-transparent rounded"
      >
        Back to Home Page
      </button>
    </div>
  );
}

export default SuccessPage;
