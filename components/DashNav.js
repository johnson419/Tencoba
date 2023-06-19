import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser, faCog, faCreditCard, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const DashNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 py-4 rounded-xl mt-3 mr-3 ml-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <button className="text-white">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <span className="ml-4 text-white font-semibold text-lg">
              Dashboard
            </span> */}
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Search..."
                aria-label="Search..."
              />
              {/* <FontAwesomeIcon
                icon={faSearch}
                className="text-white absolute top-1/2 right-3 transform -translate-y-1/2"
              /> */}
            </div>
            <div className="relative ml-4" ref={dropdownRef}>
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
                  <li>
                    <a href="#" className="dropdown-item">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <Image
                              src="/two.jpeg"
                              alt="Profile Image"
                              className="w-10 h-10 rounded-circle"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1 flex-shrink-0 whitespace-nowrap">
                          <span className="font-semibold block overflow-hidden overflow-ellipsis">
                            John Doe
                          </span>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <div className="border-t my-2"></div>
                  </li>
                  <li>
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-200">
                      <FontAwesomeIcon icon={faUser} className="me-2 text-blue-500 text-lg" />
                      <span className="align-middle text-sm font-medium">
                        My Profile
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-200">
                      <FontAwesomeIcon icon={faCog} className="me-2 text-blue-500 text-lg" />
                      <span className="align-middle text-sm font-medium">
                        Settings
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-200">
                      <FontAwesomeIcon icon={faCreditCard} className="me-2 text-blue-500 text-lg" />
                      <span className="align-middle text-sm font-medium">
                        Billing
                      </span>
                      <span className="flex-shrink-0 bg-red-500 text-white rounded-full w-5 h-5 ml-2 flex items-center justify-center">
                        4
                      </span>
                    </button>
                  </li>
                  <li>
                    <div className="border-t my-2"></div>
                  </li>
                  <li>
                    <button className="flex items-center w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-200">
                      <FontAwesomeIcon icon={faPowerOff} className="me-2 text-blue-500 text-lg" />
                      <span className="align-middle text-sm font-medium">
                        Log Out
                      </span>
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

export default DashNav;
