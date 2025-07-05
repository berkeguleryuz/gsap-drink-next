"use client";
/* eslint-disable @next/next/no-img-element */
import { flavorlists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const scrollAmount =
      (sliderRef.current?.scrollWidth ?? 0) - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1000}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1000}px`,
        ease: "power1.inOut",
        markers: true,
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -10,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -12,
            ease: "power1.inOut",
          },
          "<",
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<",
        );
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper" id="slider-wrapper">
      <div className="flavors" id="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
