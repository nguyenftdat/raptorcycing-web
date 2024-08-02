import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16 bg-black text-white">
        <div className="mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            <div className="md:col-start-2 md:col-span-4">
              <Image
                src={"/svg/raptor_white.svg"}
                alt="raptor-logo"
                width={0}
                height={0}
                sizes="30vw"
                style={{ width: "30%", height: "auto" }}
              />
            </div>

            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-4 gap-8 leading-7">
              <div>
                <h3 className="text-gray-200 mb-1 font-semibold text-[16px]">
                  EXPLORE
                </h3>
                <ul className="font-medium text-[12px]">
                  <li>ROAD</li>
                  <li>TRIATHLON</li>
                  <li>MTB</li>
                  <li>ALL RANGES</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-200 mb-1 font-semibold text-[16px]">
                  BIKE WORLD
                </h3>
                <ul className="font-medium text-[12px]">
                  <Link
                    href={{
                      pathname: "/price",
                      query: { name: "raptor" },
                    }}
                  >
                    <li>RAPTOR</li>
                  </Link>

                  <Link
                    href={{
                      pathname: "/price",
                      query: { name: "falcon" },
                    }}
                  >
                    <li>FALCON</li>
                  </Link>
                  <Link
                    href={{
                      pathname: "/price",
                      query: { name: "falcon" },
                    }}
                  >
                    <li>FALCON</li>
                  </Link>
                  <Link
                    href={{
                      pathname: "/price",
                      query: { name: "hawk" },
                    }}
                  >
                    <li>HAWK</li>
                  </Link>
                  <Link
                    href={{
                      pathname: "/price",
                      query: { name: "eagle" },
                    }}
                  >
                    <li>EAGLE</li>
                  </Link>
                  <Link
                    href={{
                      pathname: "/price",
                      query: { name: "vulture" },
                    }}
                  >
                    <li>VULTURE</li>
                  </Link>
                  <Link
                    href={{
                      pathname: "/price",
                      query: { name: "trex" },
                    }}
                  >
                    <li>TREX</li>
                  </Link>

                  <li>ALL BIKES</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-200 mb-1 font-semibold text-[16px]">
                  ABOUT US
                </h3>
                <ul className="font-medium text-[12px]">
                  <li>DEALERS</li>
                  <li>TERMS & CONDITIONS</li>
                  <a href="/contact">
                    <li>CONTACT</li>
                  </a>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-200 mb-1 font-semibold text-[16px]">
                  CUSTOMER SERVICES
                </h3>
                <ul className="font-medium text-[12px]">
                  <li>Email: info@raptorcycling.com</li>
                  <li>17807 MACLAREN STREET CITY OF INDUSTRY, CA 91744</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="grid lg:grid-cols-12 sm:grid-rows">
            <div className="md:col-start-2 md:col-span-4">
              <div className="md:flex md:items-center md:justify-between">
                <div className="text-gray-400 text-[9px] mr-4">
                  &copy; Copyright 2024 by Raptor. All rights reserved.
                </div>
              </div>
            </div>
            <div className="lg:col-start-8 lg:col-end-12">
              <div className="flex justify-end">
                <div className="text-gray-400 text-[9px] mr-4 content-center">
                  <p>@RAPTOR</p>
                </div>

                <Image
                  src={"/svg/fb_icon.svg"}
                  width={0}
                  height={0}
                  sizes="10vw"
                  className="hidden lg:block"
                  style={{ width: "5%", height: "auto" }}
                  alt="fb_icon"
                />
                <Image
                  src={"/svg/fb_icon.svg"}
                  width={0}
                  height={0}
                  sizes="10vw"
                  className="lg:hidden"
                  style={{ width: "30px", height: "auto" }}
                  alt="fb_icon"
                />
                <span className="px-1.5"></span>
                <Image
                  src={"/svg/instagram_icon.svg"}
                  width={0}
                  height={0}
                  sizes="10vw"
                  className="hidden lg:block"
                  style={{ width: "5%", height: "auto" }}
                  alt="fb_icon"
                />
                <Image
                  src={"/svg/instagram_icon.svg"}
                  width={0}
                  height={0}
                  sizes="10vw"
                  className="lg:hidden"
                  style={{ width: "30px", height: "auto" }}
                  alt="fb_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
