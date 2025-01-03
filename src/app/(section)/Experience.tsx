'use client'
import Image from "next/image"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import { useEffect } from "react";

const Experience = ({ }) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.experience-title', {
            scrollTrigger: {
                trigger: ".experience-title",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            x: 52,
            duration: 1.5

        })
        const splitType = document.querySelectorAll(".head-experience")
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

        gsap.to('.experience-description', {
            scrollTrigger: {
                trigger: ".experience-description",
                toggleActions: "restart none none none"
            },
            y: -10,
            duration: 2
        }
        )

        gsap.to('.experience-container', {
            scrollTrigger: {
                trigger: ".experience-container",
                toggleActions: "restart none none none"
            },
            x: 30,
            stagger: 1.5,
            duration: 1.5
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
        <section className="relative flex flex-col h-full max-w-[1400px] items-center justify-center px-7 py-10 lg:py-20 lg:px-24 bg-[#000000] gap-7">
            <div className="h-full w-full z-10 flex flex-col gap-5">
                <h3 className="experience-title w-full text-xl text-center font-inter text-[#D3AF39] uppercase -ml-[50px]">we offer</h3>
                <h1 className="head-experience w-full text-center font-arvo font-bold text-4xl md:text-6xl lg:leading-[80px]">
                    Unforgettable
                    <br />
                    Dining{' '}
                    <span className="text-primary">Experience</span>
                </h1>
            </div>
            <div
                className="hidden w-0 lg:flex gap-4  lg:w-full lg:gap-7"
            >
                <div
                    className="relative experience-container w-full -ml-[50px]"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30"></div>
                    <Image
                        src="/images/home/food.png"
                        width={571}
                        height={666}
                        alt="side-close-up"
                        className=" h-[550px] w-full object-cover"
                    />

                    <div className="absolute left-0 bottom-3 flex flex-col items-center justify-start h-[300px] gap-3 lg:gap-6 z-20 px-5">
                        <h1 className="w-full text-start text-2xl lg:text-6xl font-extrabold font-oswald">Food</h1>
                        <p className="max-w-[350px] text-xs lg:text-lg lg:max-w-[380px]">Our food is a tribute to authentic flavors, crafted with the finest ingredients and a passion for tradition. Each dish is prepared with care, bringing a taste of rich culinary heritage to your table.</p>
                    </div>
                </div>

                <div
                    className="relative experience-container w-full -ml-[50px]"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
                    <Image
                        src="/images/home/drinks.png"
                        width={571}
                        height={666}
                        alt="side-close-up"
                        className="w-full h-[550px] object-cover"
                    />
                    <div className="absolute left-0 bottom-3 flex flex-col items-center justify-start h-[300px] gap-3 lg:gap-6 z-20 px-5">
                        <h1 className="w-full text-start text-2xl lg:text-6xl font-extrabold font-oswald">Drinks</h1>
                        <p className="max-w-[350px] text-xs lg:text-lg lg:max-w-[380px]">Discover a selection of expertly crafted drinks, designed to complement every meal with rich, refreshing flavors. From signature cocktails to fine wines, each sip enhances the dining experience, bringing a perfect balance to your palate. </p>
                    </div>
                </div>
                <div
                    className="relative experience-container w-full -ml-[50px]"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
                    <Image
                        src="/images/home/atmosphere.png"
                        width={571}
                        height={666}
                        alt="side-close-up"
                        className="h-[550px] w-[1300px] object-cover"
                    />
                    <div className="absolute left-0 bottom-3 flex flex-col items-center justify-start h-[300px] gap-3 lg:gap-6 z-20 px-5">
                        <h1 className="w-full text-start text-2xl lg:text-6xl font-extrabold font-oswald">Atmosphere</h1>
                        <p className="max-w-[350px] text-xs lg:text-lg lg:max-w-[380px]">Step into an atmosphere that blends warmth and elegance, designed to make every guest feel at home. With carefully curated decor and inviting lighting, our space sets the perfect backdrop for a memorable dining experience.</p>
                    </div>
                </div>
            </div>


            <div
                className="flex flex-col w-full gap-7 lg:hidden lg:w-0 lg:h-0"
            >
                <div
                    className="relative experience-container w-full rounded-3xl -ml-[50px]"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
                    <Image
                        src="/images/home/food.png"
                        width={571}
                        height={666}
                        alt="side-close-up"
                        className="h-auto w-full rounded-lg md:rounded-none"
                    />
                    <div className="absolute w-full h-full top-0 left-0 lg:bottom-28 lg:left-24 flex justify-center items-center gap-3 lg:gap-12 z-20">
                        <h1 className="text-3xl font-extrabold font-oswald">Food</h1>
                        {/* <p className="max-w-[320px] text-md">Our food is a tribute to authentic flavors, crafted with the finest ingredients and a passion for tradition. Each dish is prepared with care, bringing a taste of rich culinary heritage to your table.</p> */}
                    </div>
                </div>
                <div
                    className="relative experience-container w-full rounded-3xl -ml-[50px]"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
                    <Image
                        src="/images/home/drinks.png"
                        width={571}
                        height={666}
                        alt="side-close-up"
                        className="h-auto w-full rounded-lg md:rounded-none"
                    />
                    <div className="absolute w-full h-full top-0 left-0  lg:bottom-28 lg:left-24 flex justify-center items-center gap-3 lg:gap-12 z-20">
                        <h1 className="text-3xl font-extrabold font-oswald">Drinks</h1>
                        {/* <p className="max-w-[320px] text-md ">Discover a selection of expertly crafted drinks, designed to complement every meal with rich, refreshing flavors. From signature cocktails to fine wines, each sip enhances the dining experience, bringing a perfect balance to your palate.</p> */}
                    </div>
                </div>
                <div
                    className="relative experience-container w-full rounded-3xl -ml-[50px]"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60"></div>
                    <Image
                        src="/images/home/atmosphere.png"
                        width={571}
                        height={666}
                        alt="side-close-up"
                        className="h-auto w-full rounded-lg md:rounded-none"
                    />
                    <div className="absolute w-full top-0 left-0 h-full lg:bottom-28 lg:left-24 flex justify-center items-center gap-3 lg:gap-12 z-20">
                        <h1 className="text-3xl font-extrabold font-oswald">Atmosphere</h1>
                        {/* <p className="max-w-[320px] text-md">Step into an atmosphere that blends warmth and elegance, designed to make every guest feel at home. With carefully curated decor and inviting lighting, our space sets the perfect backdrop for a memorable dining experience.</p> */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Experience