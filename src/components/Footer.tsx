import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ }) => {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-center gap-12 bg-[#131313] px-2 py-12">
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:flex-row">
        <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex md:w-1/3">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/menu">Menu</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/about-us">About</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/table-booking">Table booking</Link>
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 md:w-1/3">
          <Image
            src="/images/logo.png"
            width={188}
            height={57}
            alt="logo"
          />
          <Link href='https://maps.app.goo.gl/n1vMmWCWVSrWUpwE7' target="_blank" className="text-center">
            11 High Street
            Cheadle
            SK81AX, UK<br />
          </Link>
          <Link href="tel:01614255678"> Booking Request:0161 425 5678</Link>

          {/* <Image src="/images/halal.png" width={90} height={90} alt="halal" /> */}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:hidden md:w-1/3">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/menu">Menu</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/about-us">About</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/table-booking">Table booking</Link>
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/3">
          <div></div>
          <p className="font-semibold uppercase text-[#959595]">
            Opening hours
          </p>
          <p className="text-[##959595]"> Tue - Thu: 17:00 PM - 21:30 PM</p>
          <p className="text-[##959595]">Fri - Sat: 16:00 PM - 22:00 PM</p>
          <p className="text-[##959595]">Sun: 16:00 PM - 21:00 PM</p>
          <p className="text-[##959595]">Mon : Closed</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="w-fit px-4 text-center text-xl">
          © 2024 Bosphorus Istanbul Restaurent. All Rights Reserved |{" "}
          <Link
            href="https://foodo.ai"
            className="text-primary hover:underline"
          >
            Powered By Foodo
          </Link>
        </p>
      </div>
    </footer >
  );
};

export default Footer;
