import Image from "next/image";

export default function History() {
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

      <div className="grid grid-cols-6 gap-4 m-8">
        <div className="col-start-2 col-span-4">
          <p className="font-morgant text-black text-[42px] my-4">
            OUR HISTORY
          </p>
          {/* <div className="my-4">
            <Image
              src={"/svg/OUR-HISTORY.svg"}
              alt="banner_cover"
              sizes="30vw"
              style={{ width: "30%", height: "auto" }}
              height={0}
              width={0}
            />
          </div> */}
          <p className="text-black text-[14px]">
            In 2022, Tour de France cyclist Floyd Pierce embarked on a new
            journey. After years of competing at the highest level, Floyd
            decided to channel his expertise and passion into creating a new
            brand of bicycles: Raptor. Floyd's vision for Raptor was sparked by
            his experiences in the grueling races of the Tour de France. Despite
            the advanced bikes available, none seemed to meet his high standards
            for performance and innovation. He wanted something more—a bike that
            could deliver both power and precision while embodying the spirit of
            adventure. With this in mind, Floyd set out to create the perfect
            bike. Drawing from his extensive experience, Floyd began designing
            bikes that pushed the boundaries of technology and design. Raptor
            was more than just a brand; it was a revolution in cycling. He spent
            countless hours in his workshop, sketching, testing, and refining
            his ideas, always striving for perfection. Word of Floyd’s project
            quickly spread through the cycling community. His fellow cyclists,
            fans, and friends were intrigued and excited by the promise of a new
            kind of bike, designed by a champion who understood their needs and
            aspirations. The first prototypes of Raptor bikes were met with awe
            and admiration. Raptor bikes are crafted with meticulous attention
            to detail. Each model combines cutting-edge materials with sleek,
            aerodynamic design, ensuring unparalleled performance and style.
            Floyd's goal was to create bikes that excelled in races and offered
            an exhilarating experience for every rider, from competitive
            athletes to casual enthusiasts. Today, Raptor stands as a testament
            to Floyd Pierce's dedication and vision. The brand has become
            synonymous with excellence and innovation in the cycling world.
            Whether climbing steep mountains, racing against the clock, or
            simply enjoying a leisurely ride, Raptor bikes promise to elevate
            your experience. Join the Raptor revolution and discover the thrill
            of riding a bike designed by a true Tour de France legend. Feel the
            power, precision, and passion that go into every Raptor bike, and
            let it inspire you to conquer new challenges and explore new
            horizons.
          </p>
          <br />
          <Image
            src={"/svg/history_banner_1.svg"}
            alt="banner_cover"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            height={0}
            width={0}
          />
          <br />
          {/* <Image
            src={"/svg/A-family-story.svg"}
            alt="banner_cover"
            sizes="30vw"
            style={{ width: "30%", height: "auto" }}
            height={0}
            width={0}
          /> */}
          <p className="text-[28px] font-morgant">A FAMILY STORY</p>
          <br />
          <p className="text-black text-[14px]">
            The journey of Floyd Pierce didn’t stop with the creation of Raptor.
            Instead, it blossomed into a true family venture, further enriching
            the legacy of the brand. Floyd’s siblings, Emma and Jack, decided to
            join this extraordinary adventure, bringing with them their unique
            expertise and creative energy. Together, the three family members
            formed a tight-knit team, solidifying the foundation of Raptor.
            Their parents, witnessing the passion of their children and
            convinced by their vision, also decided to join the business. Their
            experience in business and unwavering support played a crucial role
            in the development and growth of the bicycle company. In 2022, the
            adventure truly took off. Thanks to the commitment, talent, and
            innovation of the family, production increased exponentially to meet
            the growing demand of passionate cyclists. This expansion led to a
            significant rise in revenue, allowing Raptor to solidify its
            position in the market and establish itself among the leaders in the
            cycling industry.
          </p>
          <br />
          <Image
            src={"/svg/blank_image.svg"}
            alt="banner_cover"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            height={0}
            width={0}
          />
          <br />
          <p className="text-black text-[14px]">
            However, despite this rapid growth, the family never lost sight of
            the values that have underpinned the success of Raptor. Each bicycle
            that rolls out of their workshop is still infused with the love,
            passion, and meticulous attention to detail that defines their
            family legacy. Today, the adventure continues to thrive, fueled by a
            cohesive team, boundless creativity, and an unwavering commitment to
            delivering exceptional bikes. The dreams Floyd Pierce envisioned,
            initially sketched on paper, have evolved into a reality that
            inspires cyclists to exceed their limits and explore new horizons.
            As the saga of this remarkable brand unfolds, the future holds great
            promise. Their dedication to excellence, innovation, and passion
            permeates every facet of this family enterprise, creating an
            unmatched cycling experience for all who embark on this journey.
            Prepare to discover captivating new models, awe-inspiring
            performance, and unparalleled quality as the journey of Raptor,
            guided by passion and driven by a united family, continues to expand
            and redefine the boundaries of the cycling industry.
          </p>
          <br />
          <Image
            src={"/svg/blank_image.svg"}
            alt="banner_cover"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            height={0}
            width={0}
          />
          <br />
          <p className="text-black text-[14px]">
            Today, fueled by their unwavering determination and passion, Raptor
            boasts a team of 30 dedicated employees committed to the brand. Each
            member of this team shares a common dedication to excellence and a
            desire to offer exceptional bikes. What sets this company apart is
            that all bikes are conceived and assembled in Brittany, the
            heartland of their operations. This geographic proximity allows for
            meticulous control over every stage of production, ensuring bikes of
            the highest quality. It is through this expertise and passion that
            the brand delivers bikes with outstanding value for money. The team
            takes pride in offering high-quality products at accessible prices,
            making an exceptional riding experience achievable for all cycling
            enthusiasts. Every bike model is crafted with meticulous attention
            to detail, blending performance, comfort, and style seamlessly. The
            company places utmost importance on listening to its customers,
            striving to meet their needs and exceed their expectations each
            time.
          </p>
        </div>
      </div>
    </div>
  );
}
