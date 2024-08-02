"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductManage from "@/components/ui/product-managment";
import ProductDashbroad from "@/components/ui/product-dashbroad";
import ProductOrderList from "@/components/ui/product-ordersList";
export default function Admin() {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0);

  const array = [{ key: "Product management", value: 1 },
  { key: "Order", value: 2 },
  { key: "Customer", value: 3 },
  { key: "Setting", value: 4 }];
  

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <div className="grid grid-cols-12 relative h-full">
      <div className="col-span-3 bg-[#EF9C66] p-10 text-white relative">
        <div className="grid grid-rows">
          <div className="flex justify-center pb-20">
            <Image
              src={"/svg/raptor_logo_white.svg"}
              alt="banner_cover"
              sizes="50vw"
              className="w-1/2 h-auto"
              height={0}
              width={0}
            />
          </div>
          <div className="divide-y divide-gray-200">
            {array.map((item, index) => (
              <div className="py-5 font-bold" key={index}>
                <a onClick={() => setPage(item.value)}>{item.key}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-9">
        {
        page == 1 ? <ProductDashbroad /> 
        : page == 2 ? <ProductManage />
        : page == 3 ? <ProductOrderList />
        : ""
      } 
      </div>
    </div>
  );
}
