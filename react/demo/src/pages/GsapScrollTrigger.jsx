import gsap from "gsap";
import { useGSAP } from "@gsap/react";
//ScrollTrigger is a plig-in. So, we import it from "gsap/all"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

// registering the plugin before the component:
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  // we have a div wrapping the 2 elements we want to animate
  // so we will use "useRef" to access elements inside the dive using
  // gsap.utils.toArray()
  // this methods guarantee that the elements inside the div will be sorted in an Array not a Node-List (this will help us to apply all Array method like.map or .forEach on the array)

  const boxWrapperRef = useRef();
  useGSAP(
    () => {
      // converted the elements inside the main wrapper to a clean array
      const boxes = gsap.utils.toArray(boxWrapperRef.current.children);
      boxes.forEach((box) => {
        gsap.to(box, {
          // x: 150,
          x: 150 * (boxes.indexOf(box) + 2), // we can apply some math if we want
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          ease: "power1.inOut",
          // activating scroll effect:
          scrollTrigger: {
            trigger: box, // Instead, this defines which element’s scroll position will control the animation.
            // 👉 In this code, both happen to be the same element (box) — but they don’t have to be.
            start: "bottom bottom", // start animation when the bottom of the box hits the bottom of screen
            end: "top 20%", // end animation when the top of the box hits 20% of sceen
            scrub: true, // makes animation smoother
          },
        });
      });
    },
    { scope: boxWrapperRef } //Means: "Only watch elements inside this boxWrapperRef div, and clean them up when this component unmounts."
  );
  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>
        {/* adding our ref to the div wrapping the boxes we want to animate */}
      <div ref={boxWrapperRef} className="mt-20 w-full h-screen"> 
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
