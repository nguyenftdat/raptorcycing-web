import Image from "next/image";
export default function BikeDetail() {
  const dropdown_1 = ["Select an option", "XS", "S", "M"];
  const arrayName = ["FALCON", "HAWK", "EAGLE", "TREX"];
  return (
    <div className="relative">
      <div className="relative pt-12">
        <div className="grid lggrid-cols-2 sm:grid-rows gap-4 mx-12">
          <div>
            {/* <div className="flex justify-center">
              <Image
                src={"/svg/raptor-text.svg"}
                alt="blank"
                width={0}
                height={0}
                sizes="30vw"
                style={{ width: "30%", height: "auto" }}
              />
            </div> */}
            {/* <div className="flex justify-center my-4">
              <Image
                src={"/svg/105-DI2-12V.svg"}
                alt="blank"
                width={0}
                height={0}
                sizes="20vw"
                style={{ width: "20%", height: "auto" }}
              />
            </div> */}
            <p className="font-morgant text-[42px] text-center my-4">RAPTOR</p>
            <p className="font-morgant text-[28px] text-center mb-4">
              105 DI2 12V
            </p>
            <div className="flex justify-center relative">
              <div className="h-4 bg-black" style={{ width: 0.1 }}></div>
              <p className="mx-2 text-[14px]"> ROAD RANGER, RAPTOR </p>
              <div className="h-4 bg-black" style={{ width: 0.1 }}></div>
              <p className="mx-2 text-[14px]"> MIDNIGHT BLUE </p>
            </div>
            <div className="flex justify-center my-4">
              <Image
                src={"/svg/blank_image.svg"}
                alt="blank"
                width={0}
                height={0}
                sizes="70vw"
                style={{ width: "70%", height: "auto" }}
              />
            </div>
            <div>
              <p className="underline underline-offset-1 text-center py-8 font-poppins text-[14px]">
                VIEW ALL BIKE FEATURES
              </p>
            </div>
          </div>
          <div>
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

        {/* ------------------------- * ---------------------------- */}

        <div
          className="grid lg:grid-cols-2 sm:grid-rows"
          style={{ backgroundColor: "#EDEDED" }}
        >
          <div className="flex justify-center"><p className="font-morgant text-[42px] content-center">3 999 $</p></div>
          <div className="my-auto p-8">
            <div className="bg-gray-300 lg:w-2/3 p-8 relative">
              <div className="grid grid-cols-6 content-center">
                <div className="col-span-2">
                  <p>SIZE</p>
                </div>
                <div className="col-span-4">
                  <button
                    id="dropdownSizeButton"
                    data-dropdown-toggle="dropdownSize"
                    data-dropdown-delay="500"
                    data-dropdown-trigger="hover"
                    className="text-sm px-5 py-2.5 text-center inline-flex items-center border border-black w-full flex justify-between"
                    type="button"
                  >
                    Select an option{" "}
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

                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownSize"
                    className="z-40 hidden bg-slate-400 divide-y divide-gray-100 shadow dark:bg-gray-700 w-full absolute rounded-lg text-white"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDelayButton"
                    >
                      {dropdown_1.map((item, index) => (
                        <li key={item}>
                          <a href="#" className="block px-4 py-2 text-white">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="button" className="">
                <div className="flex bg-gray-400 text-white lg:justify-between items-center px-10 py-2.5 me-2 mb-2 mt-4">
                  ADD TO CART
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="py-16">
          {/* <div className="flex justify-center py-auto">
            <Image
              src={"/svg/OTHER-BIKES-YOU-MAY-LIKE.svg"}
              alt="blank"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: "50%", height: "auto" }}
            />
          </div> */}
          <p className="font-morgant text-[42px] text-center">
            OTHER BIKES YOU MAY LIKE
          </p>
          <div className="grid lg:grid-cols-4 sm:grid-rows gap-4 p-16">
            {arrayName.map((item, index) => (
              <div className="border border-gray-300" key={index}>
                <Image
                  src={"/svg/blank_image.svg"}
                  alt="blank"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="p-4">
                  {/* <div className="flex justify-center pt-4">
                      {index == 5 || index == 3 || index == 2 ? (
                        <Image
                          src={item}
                          alt="blank"
                          width={0}
                          height={0}
                          sizes="30vw"
                          style={{ width: "30%", height: "auto" }}
                        />
                      ) : (
                        <Image
                          src={item}
                          alt="blank"
                          width={0}
                          height={0}
                          sizes="40vw"
                          style={{ width: "40%", height: "auto" }}
                        />
                      )}
                    </div> */}
                  <p className="font-morgant text-[28px] text-center my-4">
                    {item}
                  </p>
                  <p className="font-morgant text-[17px] text-center mb-4">
                    105 DI2 12V
                  </p>
                  {/* <div className="flex justify-center">
                      <Image
                        src={"/svg/105-DI2-12V.svg"}
                        alt="blank"
                        width={0}
                        height={0}
                        sizes="30vw"
                        style={{ width: "30%", height: "auto" }}
                      />
                    </div> */}
                  <div
                    className="ml-0 w-full z-40 left-0 right-0 top-0 bottom-0 my-4"
                    style={{ backgroundColor: "#D4D4D4", height: 0.1 }}
                  ></div>
                  <p>ROAD RANGE, RAPTOR</p>
                  <div
                    className="ml-0 w-full z-40 left-0 right-0 top-0 bottom-0 my-4"
                    style={{ backgroundColor: "#D4D4D4", height: 0.1 }}
                  ></div>
                  <p>MIDNIGHT BLUE</p>
                  {/* <div className="flex justify-center pt-4">
                      <Image
                        src={"/svg/3999$.svg"}
                        alt="blank"
                        width={0}
                        height={0}
                        sizes="30vw"
                        style={{ width: "30%", height: "auto" }}
                      />
                    </div> */}
                  <p className="font-morgant text-[28px] text-center mt-4">
                    3 999 $
                  </p>
                  <div className="flex justify-center">
                    <a href="/bike-detail">
                      <button type="button" className="">
                        <div className="flex justify-between items-center px-10 py-2.5 me-2 mb-2 mt-4 bg-black text-white">
                          CHOOSE OPTIONS
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------- * --------------------------- */}
        <div
          className="absolute ml-10 h-full z-40 left-0 right-0 top-0 bottom-0"
          style={{ backgroundColor: "#D4D4D4", width: 0.1 }}
        ></div>
        <div
          className="absolute ml-0 w-full z-40 left-0 right-0 top-0 bottom-0"
          style={{ backgroundColor: "#D4D4D4", height: 0.1 }}
        ></div>
      </div>
      <div className="absolute bottom-0 mb-0">
        <Image
          src={"/svg/blank.svg"}
          alt="blank"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
