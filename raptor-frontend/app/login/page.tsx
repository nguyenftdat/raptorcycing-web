"use client";
import { useState } from "react";
import Image from "next/image";
export default function Login() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className="grid lg:grid-cols-3 h-screen">
      <div className="hidden lg:grid lg:col-span-2 bg-[url('/images/banner_cover_1.png')] bg-cover"></div>
      <div className="lg:col-span-1 p-10">
        <div className="grid grid-rows items-center">
          <div className="flex justify-center py-20">
            <Image
              src={"/svg/raptor_text_black.svg"}
              alt="banner_cover"
              sizes="50vw"
              className="w-1/2 h-auto"
              height={0}
              width={0}
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-300 text-sm font-medium mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
              onChange={e => setUsername(e.target.value)}
              value = {username}
                id="username"
                type="text"
                className="form-input w-full text-gray-300"
                placeholder="Username"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-300 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
              onChange={e => setPwd(e.target.value)}
              value ={pwd}
                id="password"
                type="password"
                className="form-input w-full text-gray-300"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
            onClick={() => {
                if (username == "admin" && pwd == '123456') {
                    window.open("/admin");
                }
            }}
              type="button"
              className="mt-4 text-white bg-black border border-gray-300 font-medium text-sm px-5 py-1.5 me-2 mb-2 gap-3"
              style={{ backgroundColor: "#000" }}
            >
              <div className="flex justify-between items-center">
                <p className="text-[15px] font-poppins">LOGIN</p>

                {/* <span className="material-symbols-outlined ml-2">add</span> */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
