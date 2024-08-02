"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpened, setIsOpened] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden py-5 bg-white">
      {/* Hamburger button */}
      <div className="flex justify-end">
        <button
          ref={trigger}
          // className={`hamburger ${mobileNavOpen && "active"}`}
          aria-controls="mobile-nav"
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="sr-only">Menu</span>
          {/* <svg
            className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" rx="1" />
            <rect y="11" width="24" height="2" rx="1" />
            <rect y="18" width="24" height="2" rx="1" />
          </svg> */}
          {!mobileNavOpen ? (
            <svg
              className="w-6 h-6 text-gray-300 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          )}
        </button>
      </div>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-50 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        {/* <ul className="bg-gray-800 px-4 py-2">
          <li>
            <Link href="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Sign in
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}
            >
              Sign up
            </Link>
          </li>
        </ul> */}
        <div className="h-screen bg-white">
          <div className="grid grid-rows">
            <div className="py-4 items-center justify-center content-center">
              <button
                id="accordion-collapse-navbar"
                data-accordion-target="#accordion-open-body-navbar"
                aria-controls="accordion-open-body-navbar"
                aria-expanded={isOpened}
                className="font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={() => setIsOpened(!isOpened)}
              >
                <p className="text-[15px] font-poppins font-medium">BIKE</p>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </div>
            {isOpened ? (
              <div className="pl-8">
                <div className="grid-rows">
                  <div className="font-semibold text-[16px] pb-2">
                    <a href="/bike">ROAD</a>
                  </div>
                  <div className="font-poppins-regular text-[14px] pl-4">
                    <div className="py-2">FALCON</div>
                    <div className="py-2">HAWK</div>
                    <div className="py-2">VULTURE</div>
                  </div>
                </div>
                <div className="grid-rows py-2">
                  <div className="font-semibold text-[16px] pb-2">
                    TRIATHLON
                  </div>
                  <div className="font-poppins-regular text-[14px] py-2 pl-4">
                    EAGLE
                  </div>
                </div>
                <div className="grid-rows py-2">
                  <div className="font-semibold text-[16px] pb-2">MTB</div>
                  <div className="font-poppins-regular text-[14px] pl-4">
                    <div className="py-2">RAPTOR</div>
                    <div className="py-2">TREX</div>
                  </div>
                </div>
              </div>
            ) : null}
            <div>
              <button
                type="button"
                className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700  items-center justify-center"
              >
                <Link href="/history">
                  <p className="text-[15px] font-poppins font-medium">
                    HISTORY
                  </p>
                </Link>
              </button>
            </div>

            {/* <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav> */}

            <div className="py-4">
              <button
                type="button"
                className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <Link href="/contact">
                  <p className="text-[15px] font-poppins font-medium">
                    CONTACT
                  </p>
                </Link>
              </button>

              {/* <button
              onClick={() => setIsOpenedCart(!isOpenedCart)}
              type="button"
              className="align-middle text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Image
                src={"/svg/cart.svg"}
                height={25}
                width={25}
                alt="cart_icon"
              />
            </button> */}
            </div>
            <div>
              <a href="/our-bikes">
                <button
                  type="button"
                  className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <p className="text-[15px] font-poppins font-medium">SHOP</p>
                </button>
              </a>
            </div>
            <div>
              <a href="/login">
                <button
                  type="button"
                  className="align-middle text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-8 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {/* <Image
                    src={"/svg/user.svg"}
                    height={20}
                    width={20}
                    alt="user_icon"
                  /> */}
                  <p className="text-[15px] font-poppins font-medium">USER</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
