import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const GsapTimeLine = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#green-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#green-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#green-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "10px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);
  const handleClick = () => {
    if (timeline.paused()) {
      timeline.play();
    } else if (timeline) {
      timeline.pause();
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex flex-col space-y-4 justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-purple-300 rounded-2xl px-4 py-2 text-purple-700"
        >
          Play/Pause
        </button>
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
    </div>
  );
};

export default GsapTimeLine;
