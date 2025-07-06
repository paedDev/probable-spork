import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 400,
      duration: 2,
      rotate: 360,
      yoyo: true,
      ease: "power1.inOut",
      repeat: -1,
    });
    gsap.to("#red-box", {
      opacity: 0,
      x: 400,
      duration: 5,
      rotate: 360,
      ease: "bounce",
    });
    gsap.to("#blue-box", {});
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

export default GsapFrom;
