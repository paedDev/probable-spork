import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#green-box",
      {
        x: -600,
        rotation: 0,
        borderRadius: "100%",
      },
      {
        x: 600,
        duration: 3,
        rotate: 360,
        repeat: -1,
        yoyo: true,
        borderRadius: "0%",
        ease: "bounce.out",
      }
    );
    gsap.from("#red-box", {
      x: 200,
      duration: 2,
      rotate: 360,
      opacity: 1,
      repeat: -1,
      yoyo: true,
    });
    gsap.to("#blue-box", {
      x: 200,
      duration: 2,
      rotate: 360,
      opacity: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);
  // useEffect(() => {}, []);
  return (
    <div className="w-full h-screen flex flex-col space-y-4 justify-center items-center">
      <div
        id="green-box"
        className="z-50 w-40 h-40 bg-gradient-to-r from-green-600 to-green-400 rounded shadow-xl"
      ></div>
      <div
        id="red-box"
        className=" z-40 w-40 h-40 bg-gradient-to-r from-red-600 to-red-400 rounded shadow-xl"
      ></div>
      <div
        id="blue-box"
        className="z-30 w-40 h-40 bg-gradient-to-r from-blue-600 to-blue-400 rounded shadow-xl"
      ></div>
    </div>
  );
};

export default GsapFromTo;
