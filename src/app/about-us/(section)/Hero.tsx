import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row px-4 lg:px-0 gap-6 lg:gap-0">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col gap-6 items-start lg:w-8/12 mt-20 lg:mt-0">
              <h1 className="font-oswald text-[#fbead2] leading-[66px] font-semibold text-5xl lg:text-6xl">Welcome to<br /> Hitchki - Where<br /> Every Bite is an<br /> Art Form</h1>
              <p className="text-[#C1B6A6] font-manrope font-normal">We have a passion for food, which drives us to work day in and out. We love what we do because it allows our creativity to flow freely while bringing people together through great-tasting dishes from all over India!</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
            <Image src='/images/about-us/hero2.jpeg' width={1066} height={1600} alt="hero" className="h-full md:h-[875px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
