import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The Hitchki<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story2.jpeg"
              width={1109}
              height={1600}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none md:h-[600px]"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl sm:text-7xl md:text-start">
              From Dream<br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Started in 2015 when we opened our first restaurant, Copper Lounge, in Hazel Grove, Stockport. Leading from there, we opened Hitchki in 2020 and our 3rd restaurant Patrao in 2022. The three of us from Mumbai, Goa & Delhi had one thing in mind: Bringing flavours from our hometowns under one roof. Being rooted in India, we emphasise traditional and ancient Indian Cooking. We want to provide a new experience and change the generic curry house experience with service, best wines and local ales.
              <br />
              <br />
              Indulge in a restaurant experience that you`ll never forget. We`ve curated and created the most unique, on-trend, and premium dining experiences in Cheadle. Treat yourselves, your family, friends and work colleagues to lasting memories over delicious mouth-watering food and drink.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
