"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Range, getTrackBackground } from "react-range";
import Link from "next/link";
import {
  localVariable,
  product,
  cartItem,
} from "../constants/constants-variable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { increment } from "@/redux/actions";

export default function OurBikes() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<cartItem[]>([]);

  const [formData, setFormData] = useState({
    sortFilter: "",
    colorFilter: "",
    cateFilter: "",
    values: [999, 9999],
    checkedItems: [] as string[],
  });

  // Xử lý thay đổi cho các trường input và select
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => {
        const updatedCheckedItems = checked
          ? [...prevState.checkedItems, value]
          : prevState.checkedItems.filter((item) => item !== value);

        return {
          ...prevState,
          checkedItems: updatedCheckedItems,
          colorFilter: updatedCheckedItems.join(","), // Cập nhật chuỗi các giá trị
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Xử lý thay đổi cho slider
  const handleRangeChange = (values: any) => {
    setFormData((prevState) => ({
      ...prevState,
      values: values,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Xử lý dữ liệu formData ở đây
    console.log("Form data:", formData);
    doFilter();
  };

  useEffect(() => {
    doFilter();
  }, []);

  async function doFilter() {
    try {
      const response = await fetch(
        localVariable.API_BASE_URL + "/products/getFilter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sort_by: formData.sortFilter,
            category_id: formData.cateFilter,
            min_price: formData.values[0],
            color: formData.colorFilter,
            max_price: formData.values[1],
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {}
  }

  return (
    <>
      <div className="relative">
        <div className="relative pt-12 pb-12">
          <div className="flex justify-center">
            <p className="font-morgant text-[42px] text-center">ALL OUR BIKE</p>
          </div>
          <p className="text-center my-4 text-[12px]">
            We only deliver to our partner retail locations.  <br /> Check the
            map to find the nearest dealer to you.
          </p>
          <div className="flex justify-center">
            <button type="button" className="" onClick={() => dispatch(increment())}>
              <div className="flex justify-between items-center px-10 py-2.5 me-2 mb-2 mt-4 border border-black">
                FIND MY DEALER
              </div>
            </button>
          </div>
          {/* -------------------------- * ----------------------------- */}
          <div className="grid lg:grid-cols-4 gap-4 m-8 sm:grid-rows">
            <div className="lg:col-span-1">
              <div className="grid p-4">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="sortFilter">SORT BY</label>
                    <select
                      id="sortFilter"
                      name="sortFilter"
                      value={formData.sortFilter}
                      onChange={handleChange}
                      className="text-sm px-5 py-2.5 inline-flex items-center my-4 relative border border-black w-full"
                    >
                      {localVariable.sortFiltersLabel.map((item) => (
                        <option value={item.value}>{item.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cateFilter">CATEGORY</label>
                    <select
                      id="cateFilter"
                      name="cateFilter"
                      value={formData.cateFilter}
                      onChange={handleChange}
                      className="text-sm px-5 py-2.5 inline-flex items-center my-4 relative border border-black w-full"
                    >
                      {localVariable.cateFiltersLabel.map((item) => (
                        <option value={item.value}>{item.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="priceRange">Price Range</label>
                    <div className="my-4 relative mx-2">
                      <Range
                        values={formData.values}
                        step={1}
                        min={999}
                        max={9999}
                        onChange={handleRangeChange}
                        renderTrack={({ props, children }) => (
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            ref={props.ref}
                            className="h-2 w-full bg-gray-200"
                            style={{
                              background: getTrackBackground({
                                values: formData.values,
                                colors: ["#ccc", "#9ca3af", "#ccc"],
                                min: 999,
                                max: 9999,
                              }),
                            }}
                          >
                            {children}
                          </div>
                        )}
                        renderThumb={({ props }) => (
                          <div
                            {...props}
                            className="w-4 h-4 bg-white border border-slate-400"
                          />
                        )}
                      />
                      <div className="flex justify-between mt-2">
                        <span>${formData.values[0]}</span>
                        <span>${formData.values[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="my-4 relative">COLORS</label>
                    {localVariable.colorFiltersLabel.map((item: any) => (
                      <div>
                        <label
                          htmlFor={item.name}
                          className="inline-flex items-center"
                        >
                          <input
                            id={item.name}
                            value={item.value}
                            type="checkbox"
                            checked={formData.checkedItems.includes(item.value)}
                            onChange={handleChange}
                            className="form-checkbox w-4 h-4 text-blue-600 border-gray-300"
                          />
                          <span className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                            {item.name}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="flex">
                    <button type="submit" className="">
                      <div className="flex justify-between items-center px-10 py-2.5 me-2 mb-2 mt-4 bg-black text-white font-bold">
                        FILTER
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* --------------------- * ------------------------ */}
            <div className="lg:col-span-3">
              <div className="grid lg:grid-cols-3 sm:grid-rows gap-4">
                {products.map((item, index) => (
                  <div>
                    <Link
                      href={{
                        pathname: "/product-detail",
                        query: { product_id: item.product_id },
                      }}
                    >
                      <div>
                        <Image
                          // src={"/svg/blank_image.svg"}
                          src={
                            item.link
                          }
                          alt="blank"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div className="p-4">
                          <p className="font-morgant text-[28px] text-center">
                            {item.product_name}
                          </p>
                          <p className="font-morgant text-[17px] text-center">
                            {item.drivetrain}
                          </p>
                          <div
                            className="ml-0 w-full z-40 left-0 right-0 top-0 bottom-0 my-4"
                            style={{ backgroundColor: "#D4D4D4", height: 0.1 }}
                          ></div>
                          <p>{item.categories}</p>
                          <div
                            className="ml-0 w-full z-40 left-0 right-0 top-0 bottom-0 my-4"
                            style={{ backgroundColor: "#D4D4D4", height: 0.1 }}
                          ></div>
                          <p>{item.color}</p>
                          <p className="font-morgant text-[28px] text-center">
                            {item.price} $
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
                    </Link>
                  </div>
                ))}
              </div>
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
    </>
  );
}
