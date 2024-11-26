'use client'
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { cn } from "@/lib/utils";

const Menu = ({ }) => {
  const [mouse, setMouse] = useState<string>('')
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.title', {
      scrollTrigger: {
        trigger: ".title",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5

    })
    const splitType = document.querySelectorAll(".head")
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

    gsap.to('.menu-description', {
      scrollTrigger: {
        trigger: ".menu-description",
        toggleActions: "restart none none none"
      },
      y: -50,
      duration: 1.5
    }
    )
    gsap.to('.menu-button', {
      scrollTrigger: {
        trigger: ".menu-button",
        toggleActions: "restart none none none"
      },
      y: -50,
      duration: 1.5
    }
    )

    gsap.to('.menu-images', {
      scrollTrigger: {
        trigger: ".menu-images",
        toggleActions: "restart none none none"
      },
      scale: 1,
      duration: 1.5,
    }
    )
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
    <section className="relative flex flex-col gap-4 md:gap-8 h-full w-full items-center bg-primary justify-center overflow-hidden py-12 md:py-24 pl-0 lg:pr-8">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h3 className="title font-inter uppercase -ml-[50px] text-[#D3AF39] text-xl">Explore menu</h3>
        <h1 className="head font-arvo text-5xl font-bold text-center">
          Hitchki{' '}
          <span className="text-[#6b955e]">Menu</span>
        </h1>
      </div>
      <div className="w-full max-w-[1300px] flex flex-col gap-2 md:gap-8 md:flex-row justify-center md:justify-between items-center ">
        <div className="container relative w-full md:w-1/3 flex flex-col justify-center items-center gap-3">
          <div className="relative h-fit w-fit rounded-full overflow-hidden" onMouseEnter={() => setMouse("1")} onMouseLeave={() => setMouse('')}>
            <Image
              src='/images/home/image.png'
              width={408}
              height={408}
              alt="image"
              className="menu-images w-full "
              style={{
                transform: "scale(0.8)"
              }}
            />
            <div className={cn('hidden', mouse === "1" && "flex overlay")} ></div>
          </div>
          <div
            className="h-fit w-full bottom-8 z-10 flex flex-col items-center justify-center gap-4">
            <p className="w-full font-arvo text-3xl text-center">Nonveg Dishes</p>
            <Link href='/menu' className="text-[#D3AF39] text-lg">View Menu</Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/3 flex flex-col justify-center items-center gap-3">
          <div className="relative h-fit w-fit rounded-full overflow-hidden" onMouseEnter={() => setMouse("2")} onMouseLeave={() => setMouse('')}>
            <Image
              src='/images/home/image2.png'
              width={408}
              height={408}
              alt="image"
              className="menu-images w-full "
              style={{
                transform: "scale(0.8)"
              }}
            />
            <div className={cn('hidden', mouse === "2" && "flex overlay")} ></div>
          </div>
          <div
            className="h-fit w-full bottom-8 z-10 flex flex-col items-center justify-center gap-4">
            <p className="w-full font-arvo text-3xl text-center">Mocktails</p>
            <Link href='/menu' className="text-[#D3AF39] text-lg">View Menu</Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/3 flex flex-col justify-center items-center gap-3">
          <div className="relative h-fit w-fit rounded-full overflow-hidden" onMouseEnter={() => setMouse("3")} onMouseLeave={() => setMouse('')}>
            <Image
              src='/images/home/image3.png'
              width={408}
              height={408}
              alt="image"
              className="menu-images w-full"
              style={{
                transform: "scale(0.8)"
              }}
            />
            <div className={cn('hidden', mouse === "3" && "flex overlay")} ></div>
          </div>
          <div
            className="h-fit w-full bottom-8 z-10 flex flex-col items-center justify-center gap-4">
            <p className="w-full font-arvo text-3xl text-center">Vegetarian Dishes</p>
            <Link href='/menu' className="text-[#D3AF39] text-lg">View Menu</Link>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Menu;
