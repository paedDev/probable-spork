import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
const GsapText = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      repeatDelay: 1,
    });
    timeline.fromTo(
      "#text",
      {
        opacity: 0,
        y: 20,
      },
      { ease: "power1.inOut", opacity: 1, y: 0, duration: 0.5 }
    );
    timeline.fromTo(
      "#para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="h-screen w-3xl mx-auto justify-center flex items-center flex-col space-y-15">
      <h1 className=" text-7xl font-bold italic" id="text">
        GsapText
      </h1>
      <p className="" id="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero
        optio voluptatem dolorem molestiae velit laudantium pariatur saepe
        expedita laboriosam in, reprehenderit est officia dignissimos
        repellendus debitis natus neque voluptates.
      </p>
    </div>
  );
};

export default GsapText;
