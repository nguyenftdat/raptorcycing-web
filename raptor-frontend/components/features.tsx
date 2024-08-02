"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const minusIcon = "-";
const plusIcon = "+";
function Accordion({ title, content, src }: any) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="w-full cursor-pointer bg-white border border-b-0"
      onClick={toggleExpanded}
    >
      <div className="text-left mt-4 items-center select-none flex gap-5 rtl:text-right pl-8">
        {!expanded ? (
          <svg
            data-accordion-icon
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        ) : (
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14"
            />
          </svg>
        )}
        {/* <h5 className="flex-1">{title}</h5> */}
        <p className="font-morgant lg:text-[42px] sm:text-[32px] text-black">{title}</p>
        {/* <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div> */}
      </div>
      <div
        className={`pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="relative text-white">
          <div>
            <Image
              src={src}
              sizes="100vw"
              // style={{ width: "100%", height: "auto" }}
              className="hidden lg:block lg:w-full lg:h-auto"
              height={0}
              width={0}
              alt="road_banner"
            />
            <Image
              src={src}
              sizes="100vw"
              style={{ width: "auto", height: "300px", objectFit: "cover" }}
              className="lg:hidden"
              height={0}
              width={0}
              alt="road_banner"
              objectFit="cover"
            />
          </div>
          <div className="absolute m-auto ml-8 left-0 right-0 top-0 bottom-0 w-64 h-48">
            <p className="text-[14px] font-poppins">{content}</p>
            <button
              type="button"
              className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
            >
              <div className="flex justify-between items-center">
                EXPLORE
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </button>
          </div>
        </div>
        {/* <p className="text-left"></p> */}
      </div>
    </div>
  );
}

export default function Features() {
  const [isOpenedList, setState] = useState([false, false, false]);
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  const scrArr = [
    "/images/road_banner.png",
    "/images/triathlon_banner.png",
    "/images/mtb_banner.png",
  ];
  const titleArr = ["ROAD", "TRIATHLON", "MTB"];
  const contentArr = [
    "By practicing road cycling, you will explore majestic mountain passes, discover winding roads, or even gain speed to win sprint finishes! Push yourself further every day and live your passion with our road bikes that will give you the strength to achieve all your goals!",
    "Our Triathlon bikes are designed for all thrill-seeking enthusiasts! Whether you're aiming for qualification in Kona or seeking pure enjoyment in your local triathlons, you'll go farther, faster. Our Triathlon bikes will transform you into an Ironman.",
    "Mountain biking is an experience of freedom and adventure! Whether you're having fun with friends, clearing your mind, or riding for victory, With our mountain bikes, take back control",
  ];
  return (
    <div>
      {/* <div className="mx-auto pl-10 text-white">
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              onClick={() => setState([!isOpenedList[0], false, false])}
              type="button"
              
              className="flex items-center w-full p-5 rtl:text-right border border-b-0 ddark:text-gray-400 hover:bg-gray-100 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={isOpenedList[0]}
              aria-controls="accordion-collapse-body-1"
            >
              <div className="">
                {!isOpenedList[0] ? (
                  <svg
                    data-accordion-icon
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                ) : (
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14"
                    />
                  </svg>
                )}
              </div>
              <p className="font-morgant text-[42px] text-black">ROAD</p>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden transition-height duration-500 ease-in-out"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="relative">
              <div>
                <Image
                  src={"/images/road_banner.png"}
                  sizes="100vw"
                  
                  className="hidden lg:block lg:w-full lg:h-auto"
                  height={0}
                  width={0}
                  alt="road_banner"
                />
                <Image
                  src={"/images/road_banner.png"}
                  sizes="100vw"
                  style={{ width: "auto", height: "300px", objectFit: "cover" }}
                  className="lg:hidden"
                  height={0}
                  width={0}
                  alt="road_banner"
                  objectFit="cover"
                />
              </div>
              <div className="absolute m-auto ml-8 left-0 right-0 top-0 bottom-0 w-64 h-48">
                <p className="text-[14px] font-poppins">
                  By practicing road cycling, you will explore majestic mountain
                  passes, discover winding roads, or even gain speed to win
                  sprint finishes! Push yourself further every day and live your
                  passion with our road bikes that will give you the strength to
                  achieve all your goals!
                </p>
                <button
                  type="button"
                  className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                >
                  <div className="flex justify-between items-center">
                    EXPLORE
                    <span className="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-2">
            <button
              onClick={() => setState([false, !isOpenedList[1], false])}
              type="button"
              className="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded={isOpenedList[1]}
              aria-controls="accordion-collapse-body-2"
            >
              {!isOpenedList[1] ? (
                <svg
                  data-accordion-icon
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              ) : (
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14"
                  />
                </svg>
              )}
              <p className="font-morgant text-[42px] text-black">TRIATHLON</p>
              
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="relative">
              <div>
                <Image
                  src={"/images/triathlon_banner.png"}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="hidden lg:block lg:w-full lg:h-auto"
                  height={0}
                  width={0}
                  alt="triathlon_banner"
                />
                <Image
                  src={"/images/triathlon_banner.png"}
                  sizes="100vw"
                  style={{ width: "auto", height: "300px", objectFit: "cover" }}
                  className="lg:hidden"
                  height={0}
                  width={0}
                  alt="road_banner"
                  objectFit="cover"
                />
              </div>
              <div className="absolute m-auto ml-8 left-0 right-0 top-0 bottom-0 w-64 h-48">
                <p className="text-[14px] font-poppins">
                  Our Triathlon bikes are designed for all thrill-seeking
                  enthusiasts! Whether you're aiming for qualification in Kona
                  or seeking pure enjoyment in your local triathlons, you'll go
                  farther, faster. Our Triathlon bikes will transform you into
                  an Ironman.
                </p>
                <button
                  type="button"
                  className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                >
                  <div className="flex justify-between items-center">
                    EXPLORE
                    <span className="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
         
          <h2 id="accordion-collapse-heading-3">
            <button
              onClick={() => setState([false, false, !isOpenedList[2]])}
              type="button"
              className="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded={isOpenedList[2]}
              aria-controls="accordion-collapse-body-3"
            >
              {!isOpenedList[2] ? (
                <svg
                  data-accordion-icon
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              ) : (
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14"
                  />
                </svg>
              )}
              <p className="font-morgant text-[42px] text-black">MTB</p>
              
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="relative">
              <div>
                <Image
                  src={"/images/mtb_banner.png"}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="hidden lg:block lg:w-full lg:h-auto"
                  height={0}
                  width={0}
                  alt="triathlon_banner"
                />
                <Image
                  src={"/images/mtb_banner.png"}
                  sizes="100vw"
                  style={{ width: "auto", height: "300px", objectFit: "cover" }}
                  className="lg:hidden"
                  height={0}
                  width={0}
                  alt="road_banner"
                  objectFit="cover"
                />
              </div>
              <div className="absolute m-auto ml-8 left-0 right-0 top-0 bottom-0 w-64 h-48">
                <p className="text-[14px] font-poppins">
                  Mountain biking is an experience of freedom and adventure!
                  Whether you're having fun with friends, clearing your mind, or
                  riding for victory, With our mountain bikes, take back control
                </p>
                <button
                  type="button"
                  className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                >
                  <div className="flex justify-between items-center">
                    EXPLORE
                    <span className="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-16 pl-10">
        <section className="mx-auto text-center">
          {titleArr.map((item, index) => (
            <Accordion
              title={item}
              content={contentArr[index]}
              src={scrArr[index]}
            />
          ))}

          {/* <Accordion title="TRIATHLON" content={lorem} /> */}
          {/* <Accordion title="MTB" content={lorem} /> */}
        </section>
      </div>
    </div>
  );
}
