import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.querySelectorAll("div"));
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
      gsap.to("#blue-box", {
        x: 350,
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: "#blue-box",
          start: "bottom, bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, []);
  return (
    <div className="bg-gray-200">
      <div
        className="h-[400vh] w-full flex flex-col items-center space-y-2 justify-center"
        ref={scrollRef}
      >
        <div
          id="purple-box"
          className="z-30 w-40 h-40 bg-gradient-to-r from-purple-600 to-purple-400 rounded shadow-xl"
        ></div>
        <div
          id="purple-box"
          className="z-30 w-40 h-40 bg-gradient-to-r from-purple-600 to-purple-400 rounded shadow-xl"
        ></div>
      </div>
      <div className="h-[200vh] w-full flex flex-col items-center space-y-2 justify-center ">
        <div
          id="blue-box"
          className="z-30 w-40 h-40 bg-gradient-to-r from-blue-600 to-blue-400 rounded shadow-xl"
        ></div>
        <div
          id="blue-box"
          className="z-30 w-40 h-40 bg-gradient-to-r from-blue-600 to-blue-400 rounded shadow-xl"
        ></div>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
