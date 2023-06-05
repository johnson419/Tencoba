import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faWallet, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen mx-auto top-0 left-3 py-4 px-2 flex flex-col items-start rounded-xl">
      <a href="#" className="mb-8 flex items-center">
        <div className="w-6">
          <FontAwesomeIcon icon={faHome} size="1x" />
        </div>
        <span className="ml-2 text-sm text-center">Home</span>
      </a>
      <a href="#" className="mb-8 flex items-center">
        <div className="w-6">
          <FontAwesomeIcon icon={faChartLine} size="1x" />
        </div>
        <span className="ml-2 text-sm text-center">Charts</span>
      </a>
      <a href="#" className="mb-8 flex items-center">
        <div className="w-6">
          <FontAwesomeIcon icon={faWallet} size="1x" />
        </div>
        <span className="ml-2 text-sm text-center">Wallet</span>
      </a>
      <a href="#" className="mb-8 flex items-center">
        <div className="w-6">
          <FontAwesomeIcon icon={faCreditCard} size="1x" />
        </div>
        <span className="ml-2 text-sm text-center">Credit Card</span>
      </a>
    </div>
  );
};

export default Sidebar;
