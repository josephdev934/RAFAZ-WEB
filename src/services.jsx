import React, { useEffect } from "react";
import Img1 from "./assets/Rectangle-4.png.png";
import Img2 from "./assets/Rectangle-3.png.png";
import Img3 from "./assets/Rectangle-2.png.png";
import Img4 from "./assets/Rectangle-1.png.png";
import Img5 from "./assets/Rectangle.png.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="services"
      className="services-section py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-50"
    >
      <div className="text-center mb-10" data-aos="fade-up">
        <h3 className="font-[700] text-2xl sm:text-3xl mb-3">
          Services we offer for you
        </h3>
        <p className="text-gray-700 text-sm sm:text-base">
          We create websites that look stunning, load fast, and convert <br className="hidden sm:block" /> better.
        </p>
      </div>

      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-10 mb-10">
        {[
          {
            title: "Web Design & Development",
            img: Img1,
            desc: "We design sleek, modern websites tailored to your brand and optimized for conversions. Built for speed, mobile, and impact.",
          },
          {
            title: "UI/UX Design",
            img: Img2,
            desc: "We craft clean, intuitive interfaces that keep visitors engaged and help your brand stand out visually.",
          },
          {
            title: "SEO & Website Optimization",
            img: Img3,
            desc: "Your site doesn't just look good — it ranks. From keyword structure to page speed, we ensure your brand gets seen.",
          },
        ].map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col w-full sm:w-[48%] md:w-[45%] lg:w-[30%] max-w-[400px]"
          >
            <p className="mb-3 text-xl sm:text-2xl font-[700] font-gentium">{service.title}</p>
            <img
              className="w-full h-[200px] mb-3 rounded-[10px] object-cover"
              src={service.img}
              alt=""
            />
            <p className="mb-4 text-sm sm:text-base">{service.desc}</p>
            <div className="flex items-center gap-2 group" data-aos="fade-left" data-aos-delay={index * 150}>
              <a className="text-[#473BF0] flex items-center gap-2 text-sm sm:text-base" href="">
                Learn more
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
        {[
          {
            title: "Branding & Visual Identity",
            img: Img4,
            desc: "Consistent design across logos, colors and typography that builds trust and recognition online.",
          },
          {
            title: "Maintenance & Support",
            img: Img5,
            desc: "We optimize, update and enhance nonstop.",
          },
        ].map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col w-full sm:w-[48%] md:w-[45%] lg:w-[30%] max-w-[400px]"
          >
            <p className="mb-3 text-xl sm:text-2xl font-[700] font-gentium">{service.title}</p>
            <img
              className="w-full h-[200px] mb-3 rounded-[10px] object-cover"
              src={service.img}
              alt=""
            />
            <p className="mb-4 text-sm sm:text-base">{service.desc}</p>
            <div className="flex items-center gap-2 group" data-aos="fade-left" data-aos-delay={index * 150}>
              <a className="text-[#473BF0] flex items-center gap-2 text-sm sm:text-base" href="">
                Learn more
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
