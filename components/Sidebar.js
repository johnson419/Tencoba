import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faWallet,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";

const Sidebar = () => {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-sm p2 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-white">
          <GiHamburgerMenu
            className="block md:hidden H-6 W-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
      </Disclosure>
    </div>
  );
};

export default Sidebar;
