import { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-white block focus:outline-none"
      >
        {/* Hamburger Icon */}

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

      {/* Hamburger Menu (UL) */}
      <ul className={`${isOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
        <li>
          <a href="#" className="block text-white hover:text-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block text-white hover:text-gray-700">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div id="main-container">
      <header>
        <nav className="flex flex-row justify-between mt-5 mb-5 mx-10">
          {/* <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul> */}
          <HamburgerMenu />
          <div className="cursor-pointer select-none">
            <p>Bekzat&apos;s React Store</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-6 hover:stroke-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </nav>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
