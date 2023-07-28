import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import * as ROUTES from "../../../constants/routes/routes";
import { navigationPublic } from "../../../constants/navigation/navigation";
import NavItem from "../NavItem";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PublicNavbar = () => {
  return (
    <Disclosure as="nav" className="bg-white fixed z-50 w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <AiOutlineClose className="block h-6 w-6" />
                    ) : (
                      <AiOutlineMenu className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  {/* Logo */}
                  <img
                    src="https://reading-time.co.kr/themes/readingtime/img/header-logo.png"
                    alt="logo"
                    className="h-10 w-40"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
                  <NavItem navigationArr={navigationPublic} />
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:flex-shrink-0 sm:block">
                  <Link
                    to={ROUTES.LOGIN}
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <HiOutlineLogin
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Login</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-4 sm:flex-shrink-0 sm:flex sm:items-center">
                  <Link
                    to={ROUTES.CREATE_POST}
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <AiOutlinePlus
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Join us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#5353ac]">
              {navigationPublic.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? " text-white underline"
                      : "text-gray-300 hover:underline hover:text-white",
                    "block px-3 py-2 rounded-md text-2xl font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="px-2 pt-4 pb-3 border-t border-gray-700 bg-[#5353ac]">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link
                    to={ROUTES.LOGIN}
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <HiOutlineLogin
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Login</span>
                  </Link>
                </div>
                <div className="ml-4 flex-shrink-0 flex items-center">
                  <Link
                    to={ROUTES.CREATE_POST}
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <AiOutlinePlus
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Join us</span>
                  </Link>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default PublicNavbar;
