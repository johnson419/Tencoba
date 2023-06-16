import React from "react";
import { MdOutlineSpaceDashboard, MdOutlineAnalytics, MdOutlineIntegrationInstructions, MdOutlineSettings, MdOutlineMoreHoriz } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";

const Sidebar = () => {
  return (
    <div>
      <Disclosure as="nav">
        {/*  */}
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-sm p2 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-white">
          <GiHamburgerMenu
            className="block md:hidden H-6 W-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        {/* Side Panel */}
        <div className="p-6 w-1/2 h-screen bg-gray-800 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-gray-300 border-gray-100 pb-4 w-full">
              TENCOBA
            </h1>
            <div className="my-4 border-b border-gray-800 pb-4">
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <MdOutlineSpaceDashboard className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  Dashboard
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <CgProfile className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  Profile
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <FaRegComments className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  Comments
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <MdOutlineAnalytics className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  Analytics
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <BiMessageSquareDots className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  Messages
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  Integrations
                </h3>
              </div>
            </div>

            {/* Settings & More */}
            <div className="my-4 border-b border-gray-800 pb-4">
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <MdOutlineSettings className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-5 px-5 hover:bg-gray-500 p-2 rounded-md group cursor pointer hover:shadow-lg m-auto">
                {/* Needed Icons */}
                <MdOutlineMoreHoriz className="text-2xl text-gray-300 group-hover:text-black" />
                <h3 className="text-base text-gray-300 group-hover:text-black font-semibold mr-1">
                  More
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default Sidebar;
