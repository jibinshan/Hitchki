"use client"
import { Icons } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Glimpse = ({ }) => {
  const [mouse, setMouse] = useState('')
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const splitType = document.querySelectorAll(".glimpse-head")
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" })
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
          },
          opacity: 0.2,
          stagger: 0.2
        })
      }
    })

    gsap.to('.glimpse-title', {
      scrollTrigger: {
        trigger: ".glimpse-title",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5

    })

    gsap.to('.glimpse-image', {
      scrollTrigger: {
        trigger: ".glimpse-image",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 1.5

    })

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, [])
  return (
    <section className="relative flex flex-col gap-4 md:gap-8 h-full w-full items-center justify-center overflow-hidden py-12 md:py-24 pl-0 lg:pr-8">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <h3 className="glimpse-title font-inter uppercase -ml-[50px] text-[#D3AF39] text-xl">Our top picks</h3>
        <h1 className="glimpse-head font-arvo text-5xl font-bold text-center">
          Monthly
          {" "}
          <span className="text-primary">Highlights</span>
        </h1>
      </div>
      <div className="w-full max-w-[1300px] flex flex-col gap-2 md:gap-6 md:flex-row justify-center md:justify-between items-center ">
        <div className="relative w-full md:w-1/4 flex flex-col justify-center items-center gap-4">
          <div className="relative h-fit w-fit overflow-hidden" onMouseEnter={() => setMouse("1")} onMouseLeave={() => setMouse('')}>
            <Image
              src='/images/home/adana.png'
              width={387}
              height={492}
              alt="image"
              className="glimpse-image w-full"
              style={{
                transform: "scale(0.8)"
              }}
            />
            <div className={cn('hidden', mouse === "1" && "flex overlay")} ></div>
          </div>
          <div
            className="h-fit w-full bottom-8 z-10 flex flex-col items-center justify-center gap-4">
            <p className="w-full font-oswald text-3xl font-bold text-center">Meat Platters</p>
          </div>
        </div>
        <div className="relative w-full md:w-1/4 flex flex-col justify-center items-center gap-4">
          <div className="relative h-fit w-fit overflow-hidden" onMouseEnter={() => setMouse("2")} onMouseLeave={() => setMouse('')}>
            <Image
              src='/images/home/meze.png'
              width={387}
              height={492}
              alt="image"
              className="glimpse-image w-full"
              style={{
                transform: "scale(0.8)"
              }}
            />
            <div className={cn('hidden', mouse === "2" && "flex overlay")} ></div>
          </div>

          <div
            className="h-fit w-full bottom-8 z-10 flex flex-col items-center justify-center gap-4">
            <p className="w-full font-oswald text-3xl font-bold text-center">Mocktails</p>
          </div>
        </div>
        <div className="relative w-full md:w-1/4 flex flex-col justify-center items-center gap-4">
          <div className="relative h-fit w-fit overflow-hidden" onMouseEnter={() => setMouse("3")} onMouseLeave={() => setMouse('')}>
            <Image
              src='/images/home/beklava.png'
              width={387}
              height={492}
              alt="image"
              className="glimpse-image w-full"
              style={{
                transform: "scale(0.8)"
              }}
            />
            <div className={cn('hidden', mouse === "3" && "flex overlay")} ></div>
          </div>
          <div
            className="h-fit w-full bottom-8 z-10 flex flex-col items-center justify-center gap-4">
            <p className="w-full font-oswald text-3xl font-bold text-center">Vegetarian Dishes</p>
          </div>
        </div>
        <div className="relative w-full md:w-1/4 flex flex-col justify-center items-center gap-4">
          <div className="relative h-fit w-fit overflow-hidden" onMouseEnter={() => setMouse("4")} onMouseLeave={() => setMouse('')}>
            <Image
              src='/images/home/kebab.png'
              width={387}
              height={492}
              alt="image"
              className="glimpse-image w-full"
              style={{
                transform: "scale(0.8)"
              }}
            />
            <div className={cn('hidden', mouse === "4" && "flex overlay")} ></div>
          </div>

          <div
            className="h-fit w-full bottom-8 z-10 flex flex-col items-center justify-center gap-4">
            <p className="w-full font-oswald text-3xl font-bold text-center">Vegetarian Dishes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;

