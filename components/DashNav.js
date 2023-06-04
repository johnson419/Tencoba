import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button className="text-white">
              <i className="bx bx-menu bx-sm"></i>
            </button>
            <span className="ml-4 text-white font-semibold text-lg">Dashboard</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Search..."
                aria-label="Search..."
              />
              <i className="bx bx-search text-white absolute top-1/2 right-3 transform -translate-y-1/2"></i>
            </div>
            <div className="relative ml-4">
              <button
                onClick={toggleDropdown}
                className="text-white focus:outline-none"
                aria-label="Profile"
              >
                <Image
                  src="/two.jpeg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                  width={32}
                  height={32}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-10 right-0 bg-white text-gray-800 rounded-md shadow-md p-2">
                  <li className="mb-2">
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-200 rounded">
                      <i className="bx bx-user me-2"></i>
                      <span className="align-middle">My Profile</span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-200 rounded">
                      <i className="bx bx-cog me-2"></i>
                      <span className="align-middle">Settings</span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-200 rounded">
                      <i className="bx bx-credit-card me-2"></i>
                      <span className="align-middle">Billing</span>
                      <span className="flex-shrink-0 bg-red-500 text-white rounded-full w-4 h-4 ml-1 flex items-center justify-center">
                        4
                      </span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-200 rounded">
                      <i className="bx bx-power-off me-2"></i>
                      <span className="align-middle">Log Out</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
