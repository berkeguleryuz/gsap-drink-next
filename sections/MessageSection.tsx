"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });

    paragraphTL.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="size-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>
            <div
              style={{
                clipPath: "polygon(53% 1%, 53% 0, 54% 100%, 54% 100%)",
              }}
              className="msg-text-scroll">
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex justify-center md:mt-20 mt-10">
            <p className="max-w-md px-10 text-center">
              Rev up your rebel spirit with every sip of Perfect Protein. Where
              you are one step away from your next adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
