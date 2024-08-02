import Image from "next/image";
export default function ProductList() {
  const array = ["FALCON", "HAWK", "VULTURE", "EAGLE", "RAPTOR", "TREX"];
  const content = [
    "It is the result of hours of pure aerodynamic research. It willprovide you with better air penetration, more rigidity, and lightness. The Speed will be your best ally in achieving your most ambitious goals.",
    "The ideal choice for long rides! Its geometry has been meticulously designed to ensure comfort and versatility. Every detail has been carefully considered to leave nothing to chance!",
    "An aggressive design that leaves no one indifferent! Our bike is designed without compromise to ensure comfort, agility, and lightness! Focus on what matters: the joy of riding!",
    "EAGLE is a bike specially designed to meet your expectations! Whether you're seeking aerodynamics, performance, or adrenaline, this bike will help you achieve your performance goals.",
    "Equipped with cutting-edge technology, the Performance offers you an unmatched riding experience! Designed for versatility, combining speed, comfort, and aerodynamics. Impossible is no longer an option!",
    "Discover a bike that will take you anywhere! We have completely envisioned the Resistant to offer you an unmatched riding experience. Ideal for all adventurers ready to explore the most demanding playgrounds.",
  ];
  return (
    <div className="grid lg:grid-cols-4 sm:grid-rows gap-8 text-black lg:p-16 sm:p-10">
      {array.map((item, index) => (
        <div className="" key={index}>
          <Image
            src={"/svg/blank_image.svg"}
            alt="banner_cover"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            height={0}
            width={0}
          />
          <div className="mt-8">
            <p className="font-morgant text-[28px] text-center">{item}</p>
            <br />
            <p className="text-center">{content[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
