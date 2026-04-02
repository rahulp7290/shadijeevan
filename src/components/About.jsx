import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import shadi from "../assets/Wedding_1.jpg";
import shadi2 from "../assets/Wedding_2.jpg";
import shadi3 from "../assets/Wedding_3.jpg";
import shadi4 from "../assets/Wedding_4.jpg";
import shadi5 from "../assets/Wedding_5.jpg";
import shadi6 from "../assets/Wedding_6.jpg";
import shadi7 from "../assets/Wedding_7.jpg";
import shadi8 from "../assets/Wedding_8.jpg";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen py-12 md:py-20 bg-gray-100 gap-6 md:gap-10 px-4 md:px-10 lg:px-20">
      <div className="w-full md:max-w-md bg-white rounded-xl shadow-lg p-5 md:p-6 lg:ml-10 order-2 lg:order-1">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          About Developers
        </h1>

        <p className="text-black text-xs md:text-sm leading-loose font-semibold">
          Shaadi Jeevan is proudly developed by XYZ Soft Tech Solutions, a
          trusted software development company delivering innovative digital
          solutions for modern businesses. We specialize in custom web
          applications, mobile apps, and scalable platforms with a focus on
          performance, security, and user experience.
          <p className="p-4 md:p-6 text-xs md:text-sm leading-loose font-semibold">
            xyz Soft Tech Solutions is committed to building reliable,
            high-quality products that help brands grow and connect with their
            audience effectively. 📞 Contact: 1234567890 🏢 Company: Viraj Soft
            Tech Solutions 🧾 GST No: 23DBSHSJHS SEE MORE
          </p>
        </p>

        <button className="mt-6 bg-pink-600 text-white px-5 py-2 rounded-md hover:bg-pink-700 text-sm md:text-base">
          Learn More
        </button>
      </div>


      
      <div className="w-full md:w-125 lg:w-200 order-1 lg:order-2">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <img src={shadi} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={shadi2} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={shadi3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shadi4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shadi5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shadi6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shadi7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shadi8} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
