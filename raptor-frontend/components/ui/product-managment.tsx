"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

export default function ProductManage() {
  const [file, setFile] = useState<File>();
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) setFile(files[0]);
    console.log(file);
  };
  return (
    <div className="grid grid-rows p-10">
      <div className="border border-black p-10 rounded my-4">
        <div className="py-5">ADD PRODUCT</div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              name
            </label>
            <input
              id="product_name"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              ref_code
            </label>
            <input
              id="ref_code"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              weight_kg
            </label>
            <input
              id="weight_kg"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              drivetrain
            </label>
            <input
              id="drivetrain"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              frame
            </label>
            <input
              id="frame"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              fork
            </label>
            <input
              id="fork"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              rear derailleur
            </label>
            <input
              id="derailleur_rear"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              front derailleur
            </label>
            <input
              id="derailleur_front"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              shifter
            </label>
            <input
              id="shifter"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              crankset
            </label>
            <input
              id="crankset"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              cassette
            </label>
            <input
              id="cassette"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              chainv
            </label>
            <input
              id="chain"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              brakes
            </label>
            <input
              id="brakes"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              disc
            </label>
            <input
              id="disc"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              front wheel
            </label>
            <input
              id="wheel_front"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              rear_wheel
            </label>
            <input
              id="wheel_rear"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              tire_front
            </label>
            <input
              id="tire_front"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              rear tire
            </label>
            <input
              id="tire_rear"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              grip
            </label>
            <input
              id="grip"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              handlebar
            </label>
            <input
              id="handlebar"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              stem
            </label>
            <input
              id="stem"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              headset
            </label>
            <input
              id="headset"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              saddle
            </label>
            <input
              id="saddle"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              seatpost
            </label>
            <input
              id="seatpost"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>
          <div className="col-span-4 p-3">
            <label
              className="block text-gray-300 text-sm font-medium mb-1"
              htmlFor=""
            >
              description
            </label>
            <input
              id="description_txt"
              type="text"
              className="form-input w-full text-gray-300"
              required
            />
          </div>

        </div>
        <div className="w-full p-3 ">
          <input
            type={"file"}
            multiple={false}
            accept="image/png, image/jpeg"
            onChange={handleChangeFile}
          />
        </div>
        <div className="flex justify-end">
          <button
            style={{ backgroundColor: "#EF9C66" }}
            type="button"
            className="mt-4 bg-[#EF9C66] text-white rounded hover:bg-gray-100 font-medium text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          >
            <div className="flex justify-between items-center">
              <p className="text-[15px] font-poppins">SUMBIT</p>

              {/* <span className="material-symbols-outlined ml-2">add</span> */}
            </div>
          </button>
        </div>
      </div>
      <div className="border border-black p-10 rounded my-4">
        <div className="py-5">DELETE PRODUCT</div>
        <div className="w-full p-3">
          <label
            className="block text-gray-300 text-sm font-medium mb-1"
            htmlFor="email"
          >
            ID
          </label>
          <input
            id="id"
            type="text"
            className="form-input w-full text-gray-300"
            placeholder="ID"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            style={{ backgroundColor: "#EF9C66" }}
            type="button"
            className="mt-4 bg-[#EF9C66] text-white rounded hover:bg-gray-100 font-medium text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          >
            <div className="flex justify-between items-center">
              <p className="text-[15px] font-poppins">SUMBIT</p>

              {/* <span className="material-symbols-outlined ml-2">add</span> */}
            </div>
          </button>
        </div>
      </div>
      <div className="border border-black p-10 rounded my-4">
        <div className="py-5">EDIT PRODUCT</div>
        <div className="w-full p-3">
          <label
            className="block text-gray-300 text-sm font-medium mb-1"
            htmlFor="email"
          >
            ID
          </label>
          <input
            id="id"
            type="text"
            className="form-input w-full text-gray-300"
            placeholder="ID"
            required
          />
        </div>
        <div className="w-full p-3">
          <label
            className="block text-gray-300 text-sm font-medium mb-1"
            htmlFor="email"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="form-input w-full text-gray-300"
            placeholder="product name"
            required
          />
        </div>
        <div className="w-full p-3 ">
          <label
            className="block text-gray-300 text-sm font-medium mb-1"
            htmlFor="email"
          >
            Detail
          </label>
          <input
            id="detail"
            type="text"
            className="form-input w-full text-gray-300"
            placeholder="product detail"
            required
          />
        </div>

        <div className="w-full p-3 ">
          <input
            type={"file"}
            multiple={false}
            accept="image/png, image/jpeg"
            onChange={handleChangeFile}
          />
        </div>
        <div className="flex justify-end">
          <button
            style={{ backgroundColor: "#EF9C66" }}
            type="button"
            className="mt-4 bg-[#EF9C66] text-white rounded hover:bg-gray-100 font-medium text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          >
            <div className="flex justify-between items-center">
              <p className="text-[15px] font-poppins">SUMBIT</p>

              {/* <span className="material-symbols-outlined ml-2">add</span> */}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
