// 1- import gsap and useGSAP from "gsap" and "@gsap/react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  // useGSAP hook is just like useEffect, it takes a call back function + a dependency
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      duration: 2,
      yoyo: true, // to make it go forward and backword
      rotation: 360,
      ease: "elastic",
    });
  }, []);
  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
