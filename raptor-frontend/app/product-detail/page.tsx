"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import {
  product,
  cartItem,
  localVariable,
} from "../../app/constants/constants-variable";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { increment } from "@/redux/actions";
const SubScreen = () => {
  const [product, setProducts] = useState<any>(null);
  const [cart, setCart] = useState<cartItem[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const query = useSearchParams();

  const product_id = query.get("product_id");

  const addToCart = (product: any, quantity: number) => {
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
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(increment());
  };

  // const query = new URLSearchParams(useLocation().search);
  // const product_id = query.get("product_id");

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        localVariable.API_BASE_URL + "/products/getById",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: product_id,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    // console.log(product_id);
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="relative">
        <div
          className="text-center p-10"
          style={{ backgroundColor: "#EDEDED" }}
        >
          <p className="text-[42px] font-morgant">{product?.product_name}</p>
          <p className="text-[20px]">{product?.categories}</p>
          <div className="h-80"></div>
          <button type="button" className="" onClick={() => {addToCart(product, 1)}}>
            <div className="flex justify-between items-center bg-black text-white px-10 py-2.5 me-2 mb-2 mt-4">
              BUY
            </div>
          </button>
        </div>
        <div className="bg-white grid lg:grid-cols-6 sm:grid-rows p-10 gap-4">
          <div className="lg:col-start-2 lg:col-span-4">
            {/* <Image
              src={"/svg/bike-detail-board.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            /> */}
            <div className="grid grid-rows border border-black border-e">
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-5">
                  <div className="col-span-1 text-center font-morgant border-r border-b border-black pt-1">
                    REF
                  </div>
                  <div className="col-span-2 text-center font-bold border-r  border-b border-black">
                    {product?.ref_code}
                  </div>
                  <div className="col-span-2 text-center border-r  border-b border-black">
                    {product?.color}
                  </div>
                </div>
                <div className="flex justify-between px-5 pt-1  border-b border-black">
                  <div className="font-morgant">{product?.weight_kg}</div>
                  <div>{product?.drivetrain}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 p-8">
                <div className="grid grid-rows">
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        FRAME
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.frame}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        FORK
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.fork}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        REAR DERAILLEUR
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.derailleur_rear}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        FRONT DERAILLEUR
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.derailleur_front}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        SHIFTERS
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.shifter}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        CRANKSETS
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.crankset}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        CASSETTE
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.cassette}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        CHAIN
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.chain}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        BRAKES
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.brakes}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        DISC
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.disc}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows ">
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        FRONT WHEEL
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.wheel_front}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        REAR WHEEL
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.wheel_rear}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        FRONT TIRE
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.tire_front}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        REAR TIRE
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.tire_rear}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        <p>GRIP (HANDLEBAR GRIPS)</p>
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.grip}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        HANDLE BAR
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.hanglebar}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        STEM
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.stem}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        HEADSET
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.headset}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 font-morgant text-[9px]">
                        SADDLE
                      </div>
                      <div className="col-span-3 text-[9px]">
                        {product?.saddle}
                      </div>
                    </div>
                  </div>
                  <div className="pb-2"></div>
                </div>
              </div>
              <div className="flex justify-end border-t border-black">
                <div className="bg-black text-white py-4 px-8 font-morgant">
                  {product?.price}$
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-2 lg:col-end-4 ml-8">
            <p className="text-[9px]">
              Technical specifications given for reference, subject to
              modifications / Non-contractual photo
            </p>
            <p className="italic text-[9px]">
              Bike weight in size M, without pedals
            </p>
          </div>
        </div>
        <div
          className="absolute ml-10 h-full z-40 left-0 right-0 top-0 bottom-0"
          style={{ backgroundColor: "#D4D4D4", width: 0.1 }}
        ></div>
      </div>
      <div>
        <Image
          src={"/images/blank.svg"}
          alt="blank"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* ---------- * ---------- */}
      <div className="bg-black text-white grid lg:grid-cols-3 sm:grid-rows gap-4 px-8 pb-8">
        <div className="m-4">
          <Image
            src={"/svg/blank_image.svg"}
            alt="raptor-logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          {/* <div className="flex justify-center mt-4">
            <Image
              src={"/svg/Pure-Aerodynamics.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="60vw"
              style={{ width: "60%", height: "auto" }}
            />
          </div> */}
          <p className="text-[17px] font-morgant text-center py-4">
            PURE AERODYNAMICS
          </p>
          <div className="px-6 text-center text-[14px]">
            Falcon is a bike designed with meticulous precision, where every
            detail has been carefully crafted to offer you a smooth ride,
            unwavering stability, and a perfect connection with the road. Don't
            hesitate to pick up speed! Falcon is here to accompany you on your
            quest for thrills and unforgettable adventures.
          </div>
        </div>
        <div className="m-4">
          <Image
            src={"/svg/blank_image.svg"}
            alt="raptor-logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          {/* <div className="flex justify-center mt-4">
            <Image
              src={"/svg/COMPLETE-INTEGRATION.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="70vw"
              style={{ width: "70%", height: "auto" }}
            />
          </div> */}
          <p className="text-[17px] font-morgant text-center py-4">
            COMPLETE INTEGRATION
          </p>
          <div className="px-6 text-center text-[14px]">
            A cockpit that combines sleek design with optimal performance in
            terms of energy efficiency. With fully internal cable routing, you
            can save watts. The innovative stem design ensures complete
            protection of your cables, both inside and outside the bike. This
            total integration provides impeccable aesthetics and an unparalleled
            riding experience.
          </div>
        </div>
        <div className="m-4">
          <Image
            src={"/svg/blank_image.svg"}
            alt="raptor-logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />

          {/* <div className="flex justify-center mt-4">
            <Image
              src={"/svg/CUTTING-EDGE-TECHNOLOGY.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="75vw"
              style={{ width: "75%", height: "auto" }}
            />
          </div> */}
          <p className="text-[17px] font-morgant text-center py-4">
            CUTTING-EDGE TECHNOLOGY
          </p>
          <div className="px-6 text-center text-[14px]">
            Falcon Dura Ace Di2 pushes the boundaries of performance by offering
            the ultimate experience in speed and aerodynamics. With precise and
            smooth gear shifts, this bike embodies the perfect fusion of power,
            lightweight design, and efficiency.
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 sm:grid-rows gap-4 p-8">
        <div className="lg:col-start-2 lg:col-span-4">
          {/* <Image
            src={"/svg/GEOMETRY/GEOMETRY.svg"}
            alt="raptor-logo"
            width={0}
            height={0}
            sizes="30vw"
            style={{ width: "30%", height: "auto" }}
          /> */}
          <p className="font-morgant text-[42px]">GEOMETRY</p>
          {/* <div className="mt-4">
            <Image
              src={"/svg/GEOMETRY/falcon.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="20vw"
              style={{ width: "20%", height: "auto" }}
            />
          </div> */}
          <p className="font-morgant text-[28px]">// {product?.product_name}</p>
          <div className="my-4 text-[20px]">
            <p>Dimensions to compare across different sizes.</p>
          </div>
          <div className="w-full h-64 border border-black"></div>
          <div className="flex justify-center mt-4">
            <button type="button" className="" onClick={() => {addToCart(product, 1)}}>
              <div className="flex justify-between items-center bg-black text-white px-10 py-2.5 me-2 mb-2 mt-4">
                BUY
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* --------- * ---------- */}
      <div className="grid lg:grid-cols-2 sm:grid-rows bg-black text-white">
        <div>
          <div className="grid lg:grid-rows-3">
            <div className="row-span-1 py-auto py-4">
              {/* <div className="flex ml-16 py-4">
                <Image
                  src={"/svg/COMPLETE.INTEGRATION.svg"}
                  alt="raptor-logo"
                  width={0}
                  height={0}
                  sizes="30vw"
                  style={{ width: "30%", height: "auto" }}
                />
              </div> */}
              <div className="ml-16 py-4 font-morgant text-[42px] leading-none">
                <p>
                  COMPLETE <br /> INTEGRATION
                </p>
              </div>
              <div className="ml-16">
                <p className="text-[14px] mr-4">
                  The cockpit of Falcon has been designed for performance.
                  Stiff, lightweight, and entirely aerodynamic, it ensures
                  precise handling, tailored for competitors. This new monocoque
                  carbon handlebar allows for full cable integration to
                  guarantee perfect aerodynamics.
                </p>
              </div>
            </div>
            <div className="row-span-2">
              <Image
                src={"/svg/banner_complete_intergration.svg"}
                alt="raptor-logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="bg-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-rows-3 sm:grid-rows">
            <div className="row-span-2">
              <Image
                src={"/svg/banner_premium_materials.svg"}
                alt="raptor-logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="bg-contain"
              />
            </div>

            <div className="row-span-1">
              {/* <div className="ml-8 py-8">
                <Image
                  src={"/svg/premium_materials.svg"}
                  alt="raptor-logo"
                  width={0}
                  height={0}
                  sizes="50vw"
                  style={{ width: "50%", height: "auto" }}
                />
              </div> */}
              <div className="ml-4 py-4 font-morgant text-[42px] leading-none mt-2">
                <p>
                  PREMIUM <br /> INTEGRATION
                </p>
              </div>
              <div className="ml-4">
                <p className="text-[14px]">
                  The carbon fiber used is selected with the utmost care. Falcon
                  is crafted from UHM-SL carbon fiber, ensuring the highest
                  quality, rigidity, and unparalleled lightweight construction.
                  Over 800 carbon patches are meticulously assembled by hand in
                  our partner factories. A rigorous specification ensures the
                  highest standards of manufacturing and finishing. Falcon is
                  the result of extensive research into pure aerodynamics. This
                  bike has never worn its name better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------- * ---------- */}
      <div className="p-8">
        {/* <div className="flex justify-center">
          <Image
            src={"/svg/you-may-also-like.svg"}
            alt="raptor-logo"
            width={0}
            height={0}
            sizes="30vw"
            style={{ width: "30%", height: "auto" }}
          />
        </div> */}
        <p className="font-morgant text-[42px] text-center">
          YOU MAY ALSO LIKE
        </p>
        <p className="text-center mb-8 text-[20px]">
          Other models of our road range bikes.
        </p>
        <div className="grid lg:grid-cols-4 sm:grid-rows gap-4">
          <div className="lg:col-start-2 lg:col-end-3">
            <div>
              <Image
                src={"/svg/blank_image.svg"}
                alt="raptor-logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="font-morgant text-[17px] text-center my-4">RAPTOR</p>
            <p className="text-center text-[14px]">
              Equipped with cutting-edge technology, the Performance offers you
              an unmatched riding experience! Designed for versatility,
              combining speed, comfort, and aerodynamics. Impossible is no
              longer an option!
            </p>
          </div>
          <div className="lg:col-start-3 lg:col-end-4">
            <div>
              <Image
                src={"/svg/blank_image.svg"}
                alt="raptor-logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="text-center font-morgant text-[17px] my-4">HAWK</p>
            <p className="text-center text-[14px]">
              The ideal choice for long rides! Its geometry has been
              meticulously designed to ensure comfort and versatility. Every
              detail has been carefully considered to leave nothing to chance!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Detail() {
  return (
    <Suspense>
      <SubScreen />
    </Suspense>
  );
}
