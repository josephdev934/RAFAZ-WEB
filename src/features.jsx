import React, { useEffect } from "react";
import Img5 from "../src/assets/Rectangle-5.png.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="about" className="w-full ">
      {/* Background Section with Overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[90vh]"
        style={{ backgroundImage: `url(${Img5})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-[6vw] py-[10vh] gap-16 lg:gap-[10vw] xl:gap-[12vw] 2xl:gap-[15vw] text-white">
          {/* Left Side */}
          <div data-aos="fade-up" className="max-w-[600px] text-center lg:text-left">
            <h2 className="text-[] sm:text-3xl md:text-3xl xl:text-4xl font-bold mb-6 leading-snug font-gentium">
              We craft high-performance websites that attract, convert, and <br /> scale,
              built with strategy, precision, and soul.
            </h2>
            <a
              data-aos="fade-up"
              data-aos-delay="200"
              href="https://wa.link/n13cpz"
              className="inline-block bg-[#473BF0] hover:bg-[#362FCC] text-white text-sm sm:text-base md:text-lg xl:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition duration-300"
            >
              Build Your Website
            </a>
          </div>

          {/* Right Side Stats */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-1xl">
              <span className="font-[800] text-2xl sm:text-4xl md:text-3xl">
                <CountUp end={100} duration={7} delay={1} />+
              </span>
              <br />
              Brands that transformed through <br /> custom web experiences.
            </p>
            <p className="text-lg sm:text-xl md:text-xl">
              <span className="font-[700] text-3xl sm:text-4xl md:text-3xl">
                <CountUp end={98} duration={8} delay={1.5} />%
              </span>
              <br />
              Client retention rate because <br /> results keep them coming back.
            </p>
            <p className="text-lg sm:text-xl md:text-xl">
              <span className="font-[700] text-3xl sm:text-4xl md:text-3xl">
                <CountUp end={4.9} decimals={1} duration={9} delay={1.8} />/5.0
              </span>
              <br />
              Average client rating across all <br /> projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
