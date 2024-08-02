import Image from "next/image";
export default function Contact() {
  return (
    <div className="grow">
      <Image
        src={"/images/our_story.svg"}
        alt="banner_cover"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        height={0}
        width={0}
      />
      <div className="grid lg:grid-cols-6 sm:grid-rows gap-4 m-8 text-[14px]">
        <div className="lg:col-start-2 lg:col-end-5">
          <p className="font-morgant text-black text-[42px] my-8">
            CONTACT US
          </p>
          <div className="grid lg:grid-cols-2 sm:grid-rows">
            <div className="lg:mr-4">
              <form className="max-w-sm mx-auto mb-2">
                <label
                  htmlFor="number-input"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  //   id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="border border-black text-gray-900 text-sm block w-full p-2.5"
                  //   placeholder="90210"
                  required
                />
              </form>
            </div>
            <div className="lg:ml-4">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="number-input"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  //   id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="border border-black text-gray-900 text-sm block w-full p-2.5"
                  //   placeholder="90210"
                  required
                />
              </form>
            </div>
            <div className="lg:mr-4 mt-4">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="number-input"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  //   id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="border border-black text-gray-900 text-sm block w-full p-2.5"
                  //   placeholder="90210"
                  required
                />
              </form>
            </div>
            <div className="lg:ml-4 mt-4">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="number-input"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  PHONE
                </label>
                <input
                  type="text"
                  //   id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="border border-black text-gray-900 text-sm block w-full p-2.5"
                  //   placeholder="90210"
                  required
                />
              </form>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              YOUR REQUEST
            </label>
            <textarea
              id="message"
              rows={4}
              className="border border-black text-gray-900 text-sm block w-full px-8"
              //   placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="flex items-center mt-4">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ms-2 font-medium text-gray-900 dark:text-gray-300"
            >
              I consent to my email address being used for marketing purposes.
            </label>
          </div>
          <div className="grid justify-items-end mt-4">
            <button
              type="button"
              className="text-white bg-gray-800 font-medium px-8 py-1.5 me-2 mb-2 text-[15px]"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
