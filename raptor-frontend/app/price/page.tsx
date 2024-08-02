"use client";
import Image from "next/image";
// import { useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import Link from "next/link";

export default function Price() {

  // useEffect(() => {
  //   const query = new URLSearchParams(useLocation().search);
  //   const name = query.get('name');
  // });

  return (
    <div className="grid">
      <Image
        src={"/images/road_banner_1.svg"}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        height={0}
        width={0}
        alt="road_banner_1"
      />
      <div className="grid lg:grid-cols-2 sm:grid-rows">
        <div className="m-4">
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            height={0}
            width={0}
            alt="road_banner_1"
          />
        </div>
        <div className="p-8 justify-center align-center">
          <p className="text-[28px] font-medium font-morgant">FALCON</p>
          <p className="text-[17px] font-morgant">DURA ACE DI2</p>
          <p className="text-[15px] font-poppins">// BLUE CHROME</p>
          <p className="text-[14px]">
            Falcon Dura Ace Di2 pushes the limits of performance by offering the
            ultimate speed and aerodynamic experience. With precise and smooth
            gear changes, this bike embodies the perfect fusion of power,
            lightness, and efficiency.
          </p>
          <div className="grid grid-cols-2 justify-between">
            <Link href={{ pathname: '/product-detail', query: { product_id: 1} }}>
              <button type="button" className="">
                <div className="flex justify-between items-center bg-black text-white px-5 py-2.5 me-2 mb-2 mt-8">
                  <p className="text-[15px] font-poppins">LEARN MORE +</p>
                  {/* <span className="material-symbols-outlined ml-2">add</span> */}
                </div>
              </button>
            </Link>
            <div className="flex text-[28px] font-morgant justify-end lg:m-8 sm:m-4 content-center">
              <p className="content-center">3 999 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
