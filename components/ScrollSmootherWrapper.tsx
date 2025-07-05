"use client";
import { useEffect } from "react";
import gsap, { ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollSmoother);

interface ScrollSmootherWrapperProps {
  children: React.ReactNode;
}

const ScrollSmootherWrapper = ({ children }: ScrollSmootherWrapperProps) => {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default ScrollSmootherWrapper;
