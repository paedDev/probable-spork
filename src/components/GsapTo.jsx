import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#green-box", {
      x: 300,
      scale: 1.5,
      duration: 2,
      rotation: 360,
      delay: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "elastic",
    });
    gsap.to("#red-box", {
      x: 200,
      scale: 1.4,
      duration: 2,
      rotation: 360,
      delay: 0.7,
      repeat: -1,
      yoyo: true,
    });
    gsap.to("#blue-box", {
      x: 100,
      scale: 1.3,
      duration: 2,
      rotation: 360,
      delay: 0.9,
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

export default GsapTo;
