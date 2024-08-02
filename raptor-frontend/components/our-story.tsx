import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/images/our_story.svg"}
          alt="banner_cover"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="hidden lg:block"
          height={0}
          width={0}
        />
        <Image
          src={"/images/our_story.svg"}
          alt="banner_cover"
          sizes="100vw"
          style={{ width: "auto", height: "300px" }}
          className="lg:hidden"
          height={0}
          width={0}
          objectFit="fill"
        />
        <div className="absolute m-auto left-0 right-0 top-0 bottom-0 justify-center content-center">
          {/* <p className="text-6xl font-oswald">OUR STORY</p> */}
          {/* <div className="flex justify-center">
            <Image
              src={"/svg/OUR-STORY-WHITE.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div> */}
          <p className="font-morgant text-[42px] text-white text-center pt-4">
            OUR STORY
          </p>
          <div className="flex justify-center pb-4">
            <a href="/history">
              <button
                type="button"
                className="mt-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              >
                <div className="flex justify-between items-center">
                  EXPLORE
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-rows">
        <div className="justify-center content-center ps-16">
          {/* <p className="text-black font-oswald text-3xl">OUR STORY</p> */}
          {/* <div className="flex">
            <Image
              src={"/svg/Our-Story.svg"}
              alt="raptor-logo"
              width={0}
              height={0}
              sizes="30vw"
              style={{ width: "30%", height: "auto" }}
            />
          </div> */}
          <p className="font-morgant text-[28px] text-black">OUR STORY</p>
          <br />
          <p className="text-black pr-4 text-xs">
            When you choose a RAPTOR bike, you're choosing more than just a mode
            of transportation. You're joining a passionate community, embracing
            a heritage designed in the USA by Floyd Pierce, and embarking on a
            unique cycling adventure where craftsmanship and passion combine to
            offer an unforgettable experience.
          </p>
          <div className="flex">
            <a href="/history">
              <button
                type="button"
                className="mt-4 border border-gray-300 px-5 py-2.5 me-2 mb-2 text-white"
                style={{ backgroundColor: "#000" }}
              >
                <div className="flex justify-between items-center">
                  EXPLORE
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div>
          <Image
            src={"/images/our_story_image.svg"}
            alt="banner_cover"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            height={0}
            width={0}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-rows ">
        <div>
          <Image
            src={"/images/our_story_banner_2.svg"}
            alt="banner_cover"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            height={0}
            width={0}
          />
        </div>
        <div className="justify-center content-center ps-16">
          {/* <p className="text-black font-oswald text-3xl">
            STABILITY AND AGILITY
          </p> */}
          <p className="font-morgant text-[28px] text-black">
            STABILITY AND AGILITY
          </p>
          {/* <div>
          <Image
            src={"/svg/Stability-and-Agility.svg"}
            alt="banner_cover"
            sizes="50vw"
            style={{ width: "50%", height: "auto" }}
            height={0}
            width={0}
          />
        </div> */}
          <br />
          <p className="text-black text-[14px]">
            Discover a new passion for mountain biking with our STURDY model in
            aluminum, specially designed to excel on all terrains. With its
            adapted geometry and robust construction, the STURDY ensures
            exceptional performance on every mountain biking trail.
          </p>
          <div className="flex">
            <button
              type="button"
              className="mt-4 border border-gray-300 px-5 py-2.5 me-2 mb-2 text-white"
              style={{ backgroundColor: "#000" }}
            >
              <div className="flex justify-between items-center text-14px">
                EXPLORE
                <span className="material-symbols-outlined md-16">
                  arrow_forward_ios
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
