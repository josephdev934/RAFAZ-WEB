import React, { useEffect } from "react";
import Img1 from "../src/assets/Frame-1.png.png";
import NavBar from "./navBar";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  return (
    <>
      <NavBar />
      <section
        className="w-full flex items-center text-center font-opensans bg-cover bg-center bg-no-repeat
                   min-h-[65vh] sm:min-h-[90vh] md:min-h-screen"
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="w-full max-w-none px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-0 xl:px-0 2xl:px-0 text-center">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-gentium font-bold mb-6 leading-snug"
          >
            Designing digital experiences that drive results.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base sm:text-lg md:text-xl xl:text-2xl mt-8 mb-10 sm:mt-10 sm:mb-12"
          >
            At <span className="font-semibold text-[#473BF0]">RAFAZ Web</span>, we build
            high-performing websites that turn visitors{" "}
            into clients — <br className="hidden sm:block" /> fast, functional, and built for growth.
          </p>

          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="https://wa.link/n13cpz"
            className="inline-block bg-[#473BF0] hover:bg-[#362FCC] text-white text-sm sm:text-base md:text-lg xl:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
