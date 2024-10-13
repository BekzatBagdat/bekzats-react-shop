import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/cartcontext';

function Nav() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/*Shown Nav elements*/}
      <div className="flex flex-row justify-between mt-5 mb-5 mx-10">
        {/*Hamburger Menu*/}
        <div>
          <button
            onClick={toggleMenu}
            className="text-white block focus:outline-none duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
        {/*Logo*/}
        <div className="cursor-pointer select-none hidden sm:block text-lg">
          <p>Bekzat&apos;s React Shop</p>
        </div>
        {/*Cart Icon*/}
        <Link to="/cart">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-5 hover:stroke-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="absolute top-3 right-6  text-white rounded-full w-7 h-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
      {/*Hidden Nav elements*/}
      <div>
        <ul className={`${isOpen ? 'block ml-10' : 'hidden'} mt-4 space-y-2`}>
          <li>
            <Link
              to="/"
              className="block text-white hover:text-gray-700 hover:font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-white hover:text-gray-700 hover:font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
