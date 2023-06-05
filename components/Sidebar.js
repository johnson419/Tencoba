import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faWallet, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen mx-auto top-0 left-3 py-4 px-2 flex flex-col items-center">
      <a href="#" className="mb-8 flex flex-col items-center">
        <FontAwesomeIcon icon={faHome} size="2x" className="mb-2" />
        <span className="text-sm text-center">Home</span>
      </a>
      <a href="#" className="mb-8 flex flex-col items-center">
        <FontAwesomeIcon icon={faChartLine} size="2x" className="mb-2" />
        <span className="text-sm text-center">Charts</span>
      </a>
      <a href="#" className="mb-8 flex flex-col items-center">
        <FontAwesomeIcon icon={faWallet} size="2x" className="mb-2" />
        <span className="text-sm text-center">Wallet</span>
      </a>
      <a href="#" className="mb-8 flex flex-col items-center">
        <FontAwesomeIcon icon={faCreditCard} size="2x" className="mb-2" />
        <span className="text-sm text-center">Credit Card</span>
      </a>
    </div>
  );
};

export default Sidebar;
