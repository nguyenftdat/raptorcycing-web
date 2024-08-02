import Image from "next/image";
export default function Policy() {
  return (
    <div className="py-12 md:py-16 bg-black text-white">
      <div className="grid lg:grid-cols-2 sm:grid-rows gap-8">
        <div className="text-center">
          {/* <p className=" text-3xl">LIFETIME WARRANTY</p> */}
          {/* <div className="flex justify-center">
            <Image
              src={"/svg/LIFETIME-WARRANTY.svg"}
              alt="banner_cover"
              sizes="50vw"
              style={{ width: "50%", height: "auto" }}
              height={0}
              width={0}
            />
          </div> */}
          <p className="font-morgant text-[28px] text-center">LIFETIME WARRANTY</p>
          <br />
          <p className="text-xs px-16">
            All our frames are guaranteed for life! This warranty reflects our
            commitment to the quality and reliability of our products. We are
            fully confident that our bikes are designed to last and accompany
            you on your beautiful two-wheeled adventures, safely! For details on
            how our lifetime warranties apply, please refer to our warranty
            policy.
          </p>
        </div>
        <div className="text-center">
          {/* <p className=" text-3xl">MADE IN USA</p> */}
          {/* <div className="flex justify-center">
            <Image
              src={"/svg/MADE-IN-USA.svg"}
              alt="banner_cover"
              sizes="30vw"
              style={{ width: "30%", height: "auto" }}
              height={0}
              width={0}
            />
          </div> */}
          <p className="font-morgant text-[28px] text-center">MADE IN USA</p>
          <br />
          <p className="text-xs px-16">
            The goal of MADE IN USA is to responsibly support economic and
            cultural employment dynamics in the United States. For a beautiful,
            prosperous, supportive, responsible, and globally engaged USA. MADE
            IN USA's actions are structured around four axes: promoting the
            territory, increasing sales, learning from the network, and
            sustaining our momentum.
          </p>
        </div>
      </div>
    </div>
  );
}
