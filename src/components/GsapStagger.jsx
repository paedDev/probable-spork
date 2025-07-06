import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "start",
      },
    });
  }, []);

  return (
    <div className="text-center w-full h-screen flex items-center justify-center flex-col space-y-4">
      <h1>Staggered Gsap</h1>

      <div className=" flex  space-x-10 justify-center items-center">
        <div className="z-50 h-30 w-30 bg-gradient-to-r from-violet-200 to-violet-400 rounded shadow-xl stagger-box cursor-pointer hover:scale-105 transition-transform"></div>
        <div className=" z-40 h-30 w-30 bg-gradient-to-r from-violet-400 to-violet-600 rounded shadow-xl stagger-box cursor-pointer hover:scale-105 transition-transform"></div>
        <div className="z-30 h-30 w-30 bg-gradient-to-r from-blue-200 to-blue-400 rounded shadow-xl stagger-box cursor-pointer hover:scale-105 transition-transform"></div>
        <div className="z-30 h-30 w-30 bg-gradient-to-r from-violet-600 to-violet-800 rounded shadow-xl stagger-box cursor-pointer hover:scale-105 transition-transform"></div>
        <div className="z-50 h-30 w-30 bg-gradient-to-r from-blue-200 to-blue-400 rounded shadow-xl stagger-box cursor-pointer hover:scale-105 transition-transform"></div>
        <div className="z-30 h-30 w-30 bg-gradient-to-r from-violet-800 to-violet-900 rounded shadow-xl stagger-box cursor-pointer hover:scale-105 transition-transform"></div>
      </div>
    </div>
  );
};

export default GsapStagger;
