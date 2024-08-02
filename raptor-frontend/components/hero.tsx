"use client";

import VideoThumb from "@/public/images/hero-image-01.jpg";
import Image from "next/image";
import { url } from "inspector";
import { Facebook, Instagram } from "iconsax-react";
import TextTransition, { presets } from "react-text-transition";
import React from "react";

export default function Hero() {
  const TEXTS = ["AGILE", "RIGID", "VERSTILE"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section>
      <div className="mx-autorelative relative">
        <Image
          src={"/images/banner_cover_1.png"}
          alt="banner_cover"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          height={0}
          width={0}
        />

        <div className="absolute w-1/2 sm:top-4 m-auto lg:top-20 left-0 right-0 bottom-0 text-white">
          <p className="font-morgant lg:text-[42px] sm:text-[28px]">DISCOVER</p>
          <p className="font-morgant lg:text-[42px] sm:text-[28px]">
            THE NEW RAPTOR
          </p>
          <div className="flex">
            <p className="font-morgant lg:text-[42px] sm:text-[28px] mr-6">MORE</p>
            <TextTransition
              springConfig={presets.wobbly}
              className="font-morgant lg:text-[42px] sm:text-[28px]"
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </div>
          <div className="flex">
          <button
                  type="button"
                  className="lg:mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
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


        {/* <div
          id="default-carousel"
          className="absolute w-1/2 top-10 m-auto top-20 left-0 right-0 bottom-0"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 text-white">
            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">DISCOVER</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">THE NEW RAPTOR</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">MORE AGILE</p>
              
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">DISCOVER</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">THE NEW RAPTOR</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">MORE RIGID</p>
              
            </div>

            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">DISCOVER</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">THE NEW RAPTOR</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">MORE VERSTILE</p>
              
            </div>
            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">DISCOVER</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">THE NEW RAPTOR</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">MORE AGILE</p>
            </div>

            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">DISCOVER</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">THE NEW RAPTOR</p>
              <p className="font-morgant lg:text-[42px] sm:text-[28px]">MORE RIGID</p>
            </div>
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
        </div> */}

        <div className="absolute w-32 h-32 left-0 right-0 top-0 bottom-0 m-auto ml-2">
          <div className="rows-2">
            <a>
              {/* <Facebook color="#333"/> */}
              <Image
                src={"/svg/fb_gray.svg"}
                alt="fb_icon"
                height={30}
                width={30}
              />
            </a>
            <span className="italic px-2.5"></span>{" "}
            <a>
              <Image
                src={"/svg/instagram_gray.svg"}
                alt="fb_icon"
                height={30}
                width={30}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
