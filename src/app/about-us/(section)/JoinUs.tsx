import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({ }) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-oswald text-5xl leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Meal
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            Sitting down and tucking into something delicious is one of life's simplest pleasures. It's well known that food feeds the body and soul - food can inspire us, comfort us, satisfy us, and make us feel good. Our menu is packed full of delicious dishes that have been thoughtfully designed by our talented chefs.
          </p>
          <Button
            className="group w-fit items-center gap-[1.19rem] font-semibold uppercase px-6 py-6"
          >
            <Link href="/table-booking" className="flex justify-center items-center gap-3">
              Book Now{" "}
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section >
  );
};

export default JoinUs;