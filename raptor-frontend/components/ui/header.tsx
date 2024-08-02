"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { product, cartItem } from "../../app/constants/constants-variable";
import data from "../../app/data/cart.json";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Header() {
  const count = useSelector((state: RootState) => state.counter.value);
  const [test, setTest] = useState(count);
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const [cart, setCart] = useState<cartItem[]>([]);
  const [subTotal, setSubTotal] = useState(0);

  // useEffect(() => {
  //   console.log('TEST ' + count)
  // }, [count]);

  useEffect(() => {
    // Lưu giỏ hàng vào localStorage khi giỏ hàng thay đổi
    localStorage.setItem("cart", JSON.stringify(cart));
    // data.map((item, index) => setSubTotal(subTotal + item["price"]));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(data));
    // Lấy giỏ hàng từ localStorage khi ứng dụng được tải
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product: product, quantity: number) => {
    const existingProduct = cart.find(
      (item: any) => item.id === product.product_id
    );
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateCartItem = (product_id: number, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.product_id === product_id ? { ...item, quantity } : item
      )
    );
    setSubTotal(subTotal + data[data.length - 1]["price"]);
  };

  const removeFromCart = (product_id: number) => {
    setCart(cart.filter((item) => item.product_id !== product_id));
    setSubTotal(subTotal - data[data.length - 1]["price"]);
  };

  const clearCart = () => {
    setCart([]);
    setSubTotal(0);
  };

  return (
    <header className="w-full z-30 bg-white content-center justify-center">
      <div className="mx-auto px-4 sm:px-6 relative">
        <div className=" hidden md:flex md:items-center md:justify-between md:h-20">
          <div className="py-4 items-center justify-center content-center">
            <button
              type="button"
              className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 align-middle"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 17 14"
              >
                <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
              </svg>
            </button>
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
            <button
              type="button"
              className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700  items-center justify-center"
            >
              <Link href="/history">
                <p className="text-[15px] font-poppins font-medium">HISTORY</p>
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

          <div className="py-8">
            <a href="/">
              <Image
                src="/svg/raptor_text_black.svg"
                alt=""
                width={200}
                height={200}
              />
            </a>
          </div>

          <div className="py-4">
            <button
              type="button"
              className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Link href="/contact">
                <p className="text-[15px] font-poppins font-medium">CONTACT</p>
              </Link>
            </button>
            <a href="/our-bikes">
              <button
                type="button"
                className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <p className="text-[15px] font-poppins font-medium">SHOP</p>
              </button>
            </a>
            <a href="/login">
              <button
                type="button"
                className="align-middle text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {/* <User /> */}
                <Image
                  src={"/svg/user.svg"}
                  height={20}
                  width={20}
                  alt="user_icon"
                />
              </button>
            </a>
            <button
              onClick={() => setIsOpenedCart(!isOpenedCart)}
              type="button"
              className="align-middle text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              {/* <ShoppingCart /> */}
              <Image
                src={"/svg/cart.svg"}
                height={25}
                width={25}
                alt="cart_icon"
              />
            </button>
          </div>
        </div>
        <MobileMenu />
      </div>
      {/* <div className="lg:grid lg:grid-cols-12 te">
        <div className="lg:col-span-1 pt-4 pl-4">
          <button
            type="button"
            className="text-gray-900 bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 align-middle"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 14"
            >
              <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
            </svg>
          </button>
        </div>
        <div className="lg:col-span-1">
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
      </div> */}
      <div className="grid absolute bg-white w-full">
        <div
          id="accordion-open-body-navbar"
          className={!isOpened ? "hidden" : ""}
          style={{ backgroundColor: "#fff", zIndex: 60 }}
          aria-labelledby="accordion-open-heading-navbar"
        >
          <div className="p-5">
            <div className="grid grid-cols-12 gap-8 leading-7">
              <div className="col-start-2 col-end-9">
                <div className="grid grid-cols-3">
                  <div className="grid-rows">
                    <div className="font-semibold mb-4 text-[16px]">
                      <a href={"/bike/"}>ROAD</a>
                    </div>
                    <div className="font-poppins-regular text-[14px]">
                      <Link
                        href={{
                          pathname: "/price",
                          query: { name: "falcon" },
                        }}
                      >
                        <div>FALCON</div>
                      </Link>
                      <Link
                        href={{
                          pathname: "/price",
                          query: { name: "hawk" },
                        }}
                      >
                        <div>HAWK</div>
                      </Link>

                      <Link
                        href={{
                          pathname: "/price",
                          query: { name: "hawk" },
                        }}
                      >
                        <div>VULTURE</div>
                      </Link>
                    </div>
                  </div>
                  <div className="grid-rows">
                    <div className="font-semibold mb-4 text-[16px]">
                      <a href={"/bike/"}>TRIATHLON</a>
                    </div>
                    <Link
                      href={{
                        pathname: "/price",
                        query: { name: "eagle" },
                      }}
                    >
                      <div className="font-poppins-regular text-[14px]">
                        EAGLE
                      </div>
                    </Link>
                  </div>
                  <div className="grid-rows">
                    <div className="font-semibold mb-4 text-[16px]">
                      <a href={"/bike/"}>MTB</a>
                    </div>
                    <div className="font-poppins-regular text-[14px]">
                      <Link
                        href={{
                          pathname: "/price",
                          query: { name: "raptor" },
                        }}
                      >
                        <div>RAPTOR</div>
                      </Link>

                      <Link
                        href={{
                          pathname: "/price",
                          query: { name: "trex" },
                        }}
                      >
                        <div>TREX</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenedCart ? (
        <div className="grid grid-cols-6 bg-gray-300">
          <div className="col-span-4"></div>
          <div className="h-screen w-1/5 bg-white absolute mr-0 right-0 border-gray-200 border z-50">
            <div className="grid grid-rows">
              {cart.map((item, index) => (
                <div className="grid grid-cols-3 p-4 gap-4">
                  <div className="col-span-1">
                    <div className="flex justify-center">
                      <Image
                        src={"/svg/blank_image.svg"}
                        alt="blank"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    {/* <div className="flex justify-center">
                      <Image
                        src={"/svg/cart-group.svg"}
                        alt="blank"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div> */}
                    <div className="grid grid-rows">
                      <div className="font-morgant">
                        {item.product_name} - {item.size}
                      </div>
                      <div className="flex justify-between">
                        <div className="font-bold">
                          {item.quantity} <span className="pr-2"></span> x{" "}
                          <span className="pr-2"></span> {item.price}$
                        </div>
                        <div>
                          <button onClick={() => {removeFromCart(item.product_id)}}>
                            <svg
                              className="w-6 h-6 text-gray-800 dark:text-white"
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
                                d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4">
              <div
                className="ml-0 w-full z-40"
                style={{ backgroundColor: "#D4D4D4", height: 0.1 }}
              ></div>
              <div className="flex justify-center my-4">
                {/* <Image
                  src={"/svg/SUB-TOTAL_3999$.svg"}
                  alt="blank"
                  width={0}
                  height={0}
                  sizes="70vw"
                  style={{ width: "70%", height: "auto" }}
                /> */}
                <p className="font-morgant">
                  SUB-TOTAL <span className="pr-1"></span> :{" "}
                  <span className="pr-2"></span> {subTotal}
                </p>
              </div>
              <div
                className="ml-0 w-full z-40"
                style={{ backgroundColor: "#D4D4D4", height: 0.1 }}
              ></div>
              <div className="grid">
                <button type="button" className="">
                  <div className="items-center px-10 py-2.5 me-2 mb-2 mt-4 w-full border border-black">
                    VIEW CART
                  </div>
                </button>
              </div>
              <div className="grid">
                <button type="button" className="">
                  <div className="bg-black text-white items-center px-10 py-2.5 me-2 mb-2 mt-4 w-full">
                    CHECKOUT
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
