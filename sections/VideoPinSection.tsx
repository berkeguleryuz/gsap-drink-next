/* eslint-disable @next/next/no-img-element */
"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,

          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });
  return (
    <div className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box">
        <video src={"/videos/pin-video.mp4"} playsInline muted loop autoPlay />

        <div className="abs-center md:scale-100 scale-200">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img
              className="size-[3vw] ml-[.5vw]"
              src="/images/play.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPinSection;
