// https://www.youtube.com/watch?v=m6PDUIF24v4&ab_channel=WebDevSimplified

// gsap.from() animates elements *from* the values you define *to* their current CSS values.
// In this example, each ".nav" element is currently at its default position (B).
// We tell GSAP to start them at y: -100 (position A) and animate down to B.
// Arguments:
// 1. Target(s) → a selector string (works like querySelectorAll), element, or array of elements.
// 2. Vars object → properties to animate (e.g. position, scale, opacity) plus options (duration, ease, etc).
// gsap.from(".nav", { y: -100, duration: 1, ease: "bounce" });
// gsap.from(".link", { opacity: 0, stagger: 0.5, delay: 1 });
// gsap.from(".side-right", {
//   x: "-100vw",
//   duration: 1,
//   delay: 1,
//   ease: "circ.in",
// });
// gsap.from(".side-left", {
//   x: "-100vw",
//   duration: 1,
//   delay: 0.5,
//   ease: "circ.in",
// });

// gsap.to() animates elements *to* the values you specify in the vars object.
// Example: if ".footer" starts off-screen at y: 100 (like we defined in footer class it is 100px off screen), this will animate it to y: 0.
// Arguments:
// 1. Target(s) → selector, element, or array of elements.
// 2. Vars object → properties to animate TO (position, scale, opacity, etc) and options like duration, delay, ease.
// gsap.to(".footer", { y: 0, duration: 1, delay: 2, ease: "power1.in" });

// gsap.fromTo() lets you define BOTH the start (from) and end (to) values explicitly.
// This ignores any CSS-defined starting values — GSAP will always start from your "from" object.
// It takes 3 arguments:
// 1. Target(s) → selector, element, or array.
// 2. From vars → the starting values.
// 3. To vars → the ending values + options (duration, delay, ease, etc).
// gsap.fromTo(".btn",{opacity:0, scale:0, rotation: 720},{opacity:1, scale:1, rotation:0, duration: 1, delay:2})

// gsap.timeline()
// timeline is like a container to organize multiple animations
// it allows chaining .from(), .to(), .fromTo(), etc in sequence or overlap
// it accepts an object with options such as { defaults: {duration: 1} }
//   - "defaults" sets default values (e.g., duration, ease) for all child tweens
// benefits of timeline:
//   - more control: play(), pause(), reverse(), restart(), etc
//   - easy to sync and overlap animations using position parameters
//   - reusable and scalable animation sequences

const myTimeline = gsap.timeline({ defaults: { duration: 1 } });

myTimeline
  .from(".nav", { y: -100, ease: "bounce" }) // starts at 0s
  .from(".link", { opacity: 0, stagger: 0.5 }) // starts after .nav finishes
  .from(".side-right", { x: "-100vw", ease: "power2.in" }, 1) // absolute position: start at 1s
  .from(".side-left", { x: "-100vw" }, "<.5") // relative: 0.5s after .side-right starts (so at 1.5s)
  .to(".footer", { y: 0, ease: "elastic" }) // animates footer into place
  .fromTo(
    ".btn",
    { opacity: 0, scale: 0, rotation: 720 }, // from state
    { opacity: 1, scale: 1, rotation: 0 } // to state
  );

// control methods example:
// timeScale(number) => change speed (e.g., 3 = 3x faster)
// reverse() => play timeline backwards
// play(), pause(), resume(), restart() are also available

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  myTimeline.timeScale(3); // make playback 3x faster
  myTimeline.reverse(); // reverse the entire timeline animation
});
