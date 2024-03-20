import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.to(".stagger-box", {
      stagger: 0.3,
      force3D: true,
      duration: 1,
      rotation: 180,
      opacity: 1,
      delay: 0.5,
      ease: "sine.out",
      repeat: 3,
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="stagger-box w-20 h-20 bg-indigo-100 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-200 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-300 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-400 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-500 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-600 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-700 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-800 rounded-lg" />
          <div className="stagger-box w-20 h-20 bg-indigo-900 rounded-lg" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
