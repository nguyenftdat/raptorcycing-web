import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="py-12 md:py-16 bg-black text-white px-16">
      <div className="grid lg:grid-cols-2 gap-8 sm:grid-rows">
        <div className="text-center lg:px-8 py-8">
          <p className="font-morgant text-[28px] text-center">PASSIONATE</p>
          {/* <p className=" text-3xl">PASSIONATE</p> */}
          {/* <div className="flex justify-center">
            <Image
              src={"/svg/PASSIONATE.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="30vw"
              style={{ width: "30%", height: "auto" }}
            />
          </div> */}
          <br />
          <p className="text-[14px] lg:px-8">
            Driven by a lifelong passion for bike design, Floyd Pierce has
            always had a precise vision for the bicycles he envisioned for the
            Raptor brand.
          </p>
        </div>
        <div className="text-center lg:px-8 py-8">
          {/* <p className=" text-3xl">DESIGN & DEVELOPMENT</p> */}
          <p className="font-morgant text-[28px] text-center">
            DESIGN & DEVELOPMENT
          </p>
          {/* <div className="flex justify-center">
            <Image
              src={"/svg/DESIGN&DEVELOPMENT.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="55vw"
              style={{ width: "55%", height: "auto" }}
            />
          </div> */}
          <br />
          <p className="text-[14px] lg:px-8">
            Following Floyd's visionary lead, his team's designer, Jason, begins
            with sketches that capture Floyd's concepts. These designs come to
            life through meticulous 3D modeling, all meticulously crafted
            inspired by Floyd's commitment to innovation and made possible by
            our dedication to precision and quality craftsmanship in the USA.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:mt-16 sm:grid-rows">
        <div className="text-center">
          {/* <p className=" text-3xl">MODELING</p> */}
          <p className="font-morgant text-[28px] text-center">MODELING</p>
          {/* <div className="flex justify-center px-8">
            <Image
              src={"/svg/MODELING.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="25vw"
              style={{ width: "25%", height: "auto" }}
            />
          </div> */}
          <br />
          <p className="text-[14px] lg:px-8">
            We collaborate with an engineering firm to validate the final
            adjustments. Full-scale 3D printing allows us to truly visualize the
            finished product before the final steps: creating molds and
            manufacturing the frames. This process reflects our commitment to
            precision and innovation, ensuring top-quality craftsmanship in the
            USA, following Floyd's pioneering vision.
          </p>
        </div>
        <div className="text-center lg:px-8">
          {/* <p className=" text-3xl">ASSEMBLY</p> */}
          <p className="font-morgant text-[28px] text-center">ASSEMBLY</p>
          {/* <div className="flex justify-center px-8">
            <Image
              src={"/svg/ASSEMBLY.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="25vw"
              style={{ width: "25%", height: "auto" }}
            />
          </div> */}
          <br />
          <p className="text-[12px] lg:px-8">
            All RAPTOR bikes are hand-assembled in USA. We take great care to
            ensure a perfect finished product, ready to ride. This commitment
            reflects our dedication to craftsmanship and quality, aligned with
            Floyd's vision for precision and excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
