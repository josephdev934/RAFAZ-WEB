import React, { useEffect } from "react";
import Img1 from "../src/assets/image-1.png";
import Img2 from "../src/assets/image-2.png";
import Img3 from "../src/assets/image-3.png";
import Img4 from "../src/assets/image-4.png";
import Img5 from "../src/assets/Rectangle-5.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="features" className="py-12">
      {/* Top Bar */}
      <p
        data-aos="fade-up"
        className="bg-[#473BF0] font-gentium mt-1 text-white font-[600] text-center py-3 text-2xl sm:text-3xl"
      >
        Trusted by Industry-leading Brands
      </p>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6 px-[4vw]">
        {[Img1, Img2, Img3, Img4].map((img, index) => (
          <img
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger animation
            className="w-[80px] sm:w-[100px] lg:w-[100px] h-auto object-contain"
            src={img}
            alt={`Brand ${index + 1}`}
          />
        ))}
      </div>

      {/* Background Section */}
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[90vh] mt-10"
        style={{ backgroundImage: `url(${Img5})` }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between h-full px-[6vw] py-[10vh] gap-16 lg:gap-[10vw] xl:gap-[12vw] 2xl:gap-[15vw]">
          {/* Left Side */}
          <div data-aos="fade-up" className="max-w-[600px] text-center lg:text-left">
            <h2 className="text-[] sm:text-3xl md:text-3xl xl:text-4xl font-bold mb-6 leading-snug font-gentium">
              We craft high- <br />performance websites <br /> that attract, convert, and <br /> scale,
              built with strategy, <br /> precision, and soul.
            </h2>
            <a
              data-aos="fade-up"
              data-aos-delay="200"
              href="#services"
              className="inline-block bg-[#473BF0] hover:bg-[#362FCC] text-white text-sm sm:text-base md:text-lg xl:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition duration-300"
            >
              Build Your Website
            </a>
          </div>

          {/* Right Side Stats */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg sm:text-xl md:text-1xl">
              <span className="font-[800] text-2xl sm:text-4xl md:text-3xl ">
                100+
              </span>
              <br />
              Brands that transformed through <br /> custom web experiences.
            </p>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg sm:text-xl md:text-xl">
              <span className="font-[700] text-3xl sm:text-4xl md:text-3xl  ">
                98%
              </span>
              <br />
              Client retention rate because <br /> results keep them coming back.
            </p>
            <p data-aos="fade-up" data-aos-delay="500" className="text-lg sm:text-xl md:text-xl">
              <span className="font-[700] text-3xl sm:text-4xl md:text-3xl ">
                4.9/5.0
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
