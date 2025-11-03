import React, { useEffect } from "react";
import Img1 from "./assets/man-standing.png.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="why-us-section bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 xl:gap-32 2xl:gap-48">
      
      {/* Image with fade-right animation */}
      <img
        data-aos="fade-right"
        className="w-full sm:w-[80%] md:w-[60%] lg:w-[450px] xl:w-[650px] xl:h-[500px] 2xl:w-[650px] h-auto rounded-[10px] object-cover "
        src={Img1}
        alt="Why Choose Us"
      />

      {/* Text content with fade-left animation */}
      <div data-aos="fade-left" className="max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <h3 className="text-2xl font-gentium sm:text-2xl lg:text-2xl xl:text-3xl font-[700] mb-6 text-center lg:text-left">
          Why Choose Rafaz Web?
        </h3>

        {[ 
          { title: "High Performance", desc: "Lightning fast, SEO website that keeps visitors engaged." },
          { title: "Custom Design", desc: "Unique modern layout tailored to brand your identity." },
          { title: "Fully Responsive", desc: "Optimized for every screen from desktop to mobile." },
          { title: "Easy to Manage", desc: "Simple updates, clean structure, zero tech headaches." },
        ].map((item, index) => (
          <div 
            key={index} 
            className="mb-6"
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger animation for each feature
          >
            <div className="flex items-center gap-3 text-[#473BF0] group">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 transition-transform duration-300 group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
              >
                <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
              </svg>
              <span className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-2xl text-black font-[700] font-gentium">
                {item.title}
              </span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-[15px] mt-1">{item.desc}</p>
          </div>
        ))}

        <p className="italic font-[700]" data-aos="fade-up" data-aos-delay={600}>
          Rafaz Web is also where creative design meets real business impact—because your website should do more than just look good.
        </p>
      </div>
    </section>
  );
};

export default WhyUS;
