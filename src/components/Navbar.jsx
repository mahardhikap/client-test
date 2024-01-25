import React, { useState, useRef, useEffect } from 'react';
import NavbarSide from './NavbarSide';
import CartSide from './CartSide';
import HistorySide from './HistorySide';

export function Navbar() {
  const [activeSublink, setActiveSublink] = useState(false);
  const sublinkRef = useRef(null);

  const toggleSublink = () => {
    setActiveSublink(!activeSublink);
  };

  useEffect(() => {
    const handleSublink = (event) => {
      if (
        activeSublink &&
        sublinkRef.current &&
        !sublinkRef.current.contains(event.target) &&
        event.target.id !== 'historySideLink'
      ) {
        setActiveSublink(false);
      }
    };

    document.addEventListener('click', handleSublink);

    return () => {
      document.removeEventListener('click', handleSublink);
    };
  }, [activeSublink]);

  return (
    <div className="py-6 cursor-pointer container mx-auto w-10/12">
      <div className="flex items-center justify-between">
        <img src="/logo.svg" alt="ss-mall-logo" />
        <div className="flex items-center">
          <ul className="gap-10 text-white mx-10 hidden lg:flex">
            <li>Home</li>
            <li className="relative flex items-center justify-center flex-row">
              Products <img src="/v-icon.svg" alt="icon-v" className="ps-2" />
            </li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
          <div className="items-center gap-5 hidden lg:flex relative">
            <img src="/search-icon.svg" alt="search" />
            <CartSide />
            <div ref={sublinkRef}>
              <img
                src="/profile.svg"
                alt="profile"
                onClick={() => toggleSublink()}
              />
              <ul
                className={`absolute top-14 right-0 bg-white rounded-lg z-10 ${
                  activeSublink ? '' : 'hidden'
                }`}
              >
                <li className="p-3 hover:bg-blue-400 hover:text-white rounded-t-lg">
                  Profile
                </li>
                <li
                  id="historySideLink"
                  className="p-3 hover:bg-blue-400 hover:text-white rounded-b-lg"
                >
                  <HistorySide />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <NavbarSide />
          </div>
        </div>
      </div>
    </div>
  );
}
