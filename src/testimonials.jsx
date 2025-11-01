import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <section className="testimonials-section bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <h2 className="text-3xl sm:text-4xl md:text-4xl mb-6 text-center" data-aos="fade-down">
          <span className="font-bold">What people say about us</span>
          <p className="text-[20px] text-gray-700 mt-2 font-gentium">
            With lots of unique blocks, you can easily build a page without coding, <br />
            Build your next landing page in minutes!
          </p>
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-10">
          <div
            className="border w-full sm:w-[300px] md:w-[320px] lg:w-[350px] 2xl:w-[450px] py-8 px-6 rounded-[10px] shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="mb-10 sm:mb-6 text-base sm:text-lg">
              "You made it so simple. My new site is so much faster and easier to work with than my old site."
            </p>
            <p className="font-bold text-lg mt-10">Web Developer</p>
          </div>

          <div
            className="border w-full sm:w-[300px] md:w-[320px] lg:w-[350px] 2xl:w-[450px] py-8 px-6 rounded-[10px] shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="mb-4 sm:mb-6 text-base sm:text-lg">
              "Simply the best. Better than all the rest. I'd recommend this for local products to beginners and advanced users."
            </p>
            <p className="font-bold text-lg">Teacher (with side hustle)</p>
          </div>

          <div
            className="border w-full sm:w-[300px] md:w-[320px] lg:w-[350px] 2xl:w-[450px] py-8 px-6 rounded-[10px] shadow"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="mb-4 sm:mb-6 text-base sm:text-lg">
              "Tun da Rafaz web suka hada mun website, sai ga ciniki online, da inya gaya ma." <br />
              (Since Rafaz web built my website, my online sales have been growing fast)
            </p>
            <p className="font-bold text-lg">Business Man</p>
          </div>
        </div>
      </section>

      <p className="bg-[#473BF0] text-white w-full text-center py-5 text-xl" data-aos="fade-up" data-aos-delay="400">
        Ready to get started?{" "}
        <a className="border bg-white text-black px-3 py-2 rounded-[10px] text-[15px]" href="">
          Get a Free Consultation
        </a>
      </p>
    </>
  );
};

export default Testimonials;
