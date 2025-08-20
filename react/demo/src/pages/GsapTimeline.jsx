import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTimeline = () => {
  // we have to save our timeline in a const
  // gsap.timeline() creates a container to organize multiple tweens in sequence or overlap.
  // It accepts configuration options that apply to the whole timeline and an optional `defaults` object.
  //
  // 🔹 Options outside `defaults`: affect the timeline itself
  //    - repeat: number of times the entire timeline repeats (-1 = infinite)
  //    - repeatDelay: delay (in seconds) before each timeline repeat
  //    - yoyo: when true, the timeline will play forwards then backwards on repeat
  //    - paused, delay, etc. can also be set here
  //
  // 🔹 defaults: { ... } inside the timeline config
  //    - provides fallback values for ALL tweens inside the timeline
  //    - useful for shared properties like duration, ease, etc.
  //    - individual tweens can override these values
  //
  // Example:
  // const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 1, ease: "power2.inOut" } })

  const myTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    defaults: { duration: 1, ease: "power1.inOut" },
  });

  useGSAP(() => {
    myTimeline.to("#yellow-box", { x: 250 }); // 1st step
    myTimeline.to("#yellow-box", { y: 100, scale: 2 }); // 2nd step
    myTimeline.to("#yellow-box", {
      x: 500,
      borderRadius: "100%",
      routation: 360,
      scale: 0.5,
      ease: "elastic", // overriding the default value defined above
    }); // 3rd step
  }, []);

  // Now, gow to the button to check the onClick function we use to control the timeline

  return (
    <main className="overflow-hidden">
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button
          // here we are using the timeline methods (pauseD, pause and play) to toggle the effect of pausing and playing the animations inside the timeline
          onClick={() => {
            myTimeline.paused() ? myTimeline.play() : myTimeline.pause();
          }}
        >
          Play/Pause
        </button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
