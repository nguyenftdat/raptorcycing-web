import Image from "next/image";
export default function Bike() {
  return (
    <div className="grow">
      <div className="grid">
        <div className="relative">
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="hidden lg:block"
            height={0}
            width={0}
            alt="road_banner_1"
          />
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "auto", height: "300px", objectFit: "cover" }}
            className="lg:hidden"
            height={0}
            width={0}
            alt="road_banner_1"
          />
          <div className="absolute grid grid-cols-12 left-0 right-0 top-0 bottom-0 m-auto text-white mt-24">
            <div className="col-start-8 col-end-12">
              <p className="text-[42px] font-poppins">ROAD BIKES</p>
              <p className="text-[17px] font-morgant">
                // FALCON, HAWK, VULTURE
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 sm:grid-rows bg-black text-white p-16">
          <div className="lg:col-start-2 lg:col-end-6">
            <p className="font-morgant text-[42px] mb-8">ROAD BIKES</p>
            <p className="text-[14px] font-poppins-regular">
              Our road bikes are designed for all riders, whether you are a Tour
              de France mountain enthusiast, a Sunday morning group rider, or a
              sprint finish lover. They will give you the strength to achieve
              your goals and the confidence to push your lim
            </p>
          </div>
        </div>
        {/* ----------- * -------------- */}
        <div className="relative">
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="hidden lg:block"
            height={0}
            width={0}
            alt="road_banner_1"
          />
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "auto", height: "400px", objectFit: "cover" }}
            height={0}
            className="lg:hidden"
            width={0}
            alt="road_banner_1"
          />
          <div className="absolute grid lg:grid-cols-12 sm:grid-rows left-0 right-0 top-0 bottom-0 m-auto text-white mt-24">
            <div className="lg:col-start-9 lg:col-end-12 p-8">
              <p className="text-[42px] font-morgant mb-8">FALCON</p>
              <p className="text-[14px] font-poppins-regular">
                FALCON is the result of hours of pure aerodynamic research. This
                bike has never been more aptly named. A new frame, entirely
                designed in our offices, in Brittany, and redesigned for greater
                speed. Better air penetration, increased rigidity, and more
                lightness. FALCON will be your best ally in achieving your most
                ambitious goals.
              </p>
              <a href="/price">
                <button
                  type="button"
                  className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-[15px] font-poppins">LEARN MORE +</p>

                    {/* <span className="material-symbols-outlined ml-2">add</span> */}
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div>
            <Image
              src={"/images/blank.svg"}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              height={0}
              width={0}
              alt="blank"
            />
          </div>
        </div>
        {/* ----------- * -------------- */}
        <div className="relative">
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="hidden lg:block"
            height={0}
            width={0}
            alt="road_banner_1"
          />
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "auto", height: "400px", objectFit: "cover" }}
            height={0}
            className="lg:hidden"
            width={0}
            alt="road_banner_1"
          />
          <div className="absolute grid lg:grid-cols-12 sm:grid-rows left-0 right-0 top-0 bottom-0 m-auto text-white mt-24">
            <div className="lg:col-start-9 lg:col-end-12 p-8">
              <p className="text-[42px] font-morgant mb-8">HAWK</p>
              <p className="text-[14px] font-poppins-regular">
                Equipped with cutting-edge technology, the Performance offers
                you an unmatched riding experience! Designed for versatility,
                combining speed, comfort, and aerodynamics. Impossible is no
                longer an option!
              </p>
              <button
                type="button"
                className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              >
                <div className="flex justify-between items-center">
                  <p className="text-[15px] font-poppins">LEARN MORE +</p>
                  {/* <span className="material-symbols-outlined ml-2">add</span> */}
                </div>
              </button>
            </div>
          </div>
          <div>
            <Image
              src={"/svg/blank.svg"}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              height={0}
              width={0}
              alt="road_banner_1"
            />
          </div>
        </div>
        {/* ----------- * -------------- */}
        <div className="relative">
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="hidden lg:block"
            height={0}
            width={0}
            alt="road_banner_1"
          />
          <Image
            src={"/images/road_banner_1.svg"}
            sizes="100vw"
            style={{ width: "auto", height: "400px", objectFit: "cover" }}
            height={0}
            className="lg:hidden"
            width={0}
            alt="road_banner_1"
          />
          <div className="absolute grid lg:grid-cols-12 sm:grid-rows left-0 right-0 top-0 bottom-0 m-auto text-white mt-24">
            <div className="lg:col-start-9 lg:col-end-12 p-8">
              <p className="text-[42px] font-morgant mb-8">VULTURE</p>
              <p className="text-[14px] font-poppins-regular">
                Equipped with cutting-edge technology, the Performance offers
                you an unmatched riding experience! Designed for versatility,
                combining speed, comfort, and aerodynamics. Impossible is no
                longer an option!
              </p>
              <button
                type="button"
                className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              >
                <div className="flex justify-between items-center">
                  <p className="text-[15px] font-poppins">LEARN MORE +</p>
                  {/* <span className="material-symbols-outlined ml-2">add</span> */}
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* ----------- * -------------- */}
        <div className="grid lg:grid-cols-4 sm:grid-rows gap-4 pt-4 p-8">
          <div className="lg:col-start-2 lg:col-end-3 border">
            <Image
              src={"/images/road_banner_1.svg"}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              height={0}
              width={0}
              alt="road_banner_1"
            />

            <div className="p-4">
              <p className="text-xl font-semibold">TRIATHLON</p>
              <p>EAGLE</p>
              <button type="button" className="">
                <div className="flex justify-between items-center bg-black text-white px-5 py-2.5 me-2 mb-2 mt-4">
                  <p className="text-[15px] font-poppins">LEARN MORE</p>
                  {/* <span className="material-symbols-outlined ml-2">add</span> */}
                </div>
              </button>
            </div>
          </div>
          <div className="lg:col-start-3 lg:col-end-4 border">
            <Image
              src={"/images/road_banner_1.svg"}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              height={0}
              width={0}
              alt="road_banner_1"
            />
            <div className="p-4">
              <p className="text-xl font-semibold">MTB</p>
              <p>RAPTOR, TREX</p>
              <button type="button" className="">
                <div className="flex justify-between items-center bg-black text-white px-5 py-2.5 me-2 mb-2 mt-4">
                  <p className="text-[15px] font-poppins">LEARN MORE</p>
                  {/* <span className="material-symbols-outlined ml-2">add</span> */}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
