import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ReviewCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide className="h-auto">
  <div className="bg-white p-6 rounded-2xl shadow-lg border hover:border-pink-500 transition h-[360px] flex flex-col justify-between">
    <div>
      <div className="flex gap-1 text-yellow-400 mb-4 text-lg">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 mb-6">
        ShaadiJeevan ke through humari shaadi bahut hi smooth rahi. Profiles genuine thi aur humare families easily connect ho gaye. Happy couples!
      </p>
    </div>

    <div className="flex items-center gap-4">
      <img
        src="https://pagedone.io/asset/uploads/1696229969.png"
        className="w-12 h-12 rounded-full object-cover"
      />

      <div>
        <h4 className="font-semibold">Rohit & Anjali</h4>
        <span className="text-sm text-gray-500">Married in 2025</span>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide className="h-auto">
  <div className="bg-white p-6 rounded-2xl shadow-lg border hover:border-pink-500 transition h-[360px] flex flex-col justify-between">
    <div>
      <div className="flex gap-1 text-yellow-400 mb-4 text-lg">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 mb-6">
        Hum dono ShaadiJeevan par mile aur instantly connect ho gaye. Platform ne family interaction ko easy bana diya. Thank you ShaadiJeevan!
      </p>
    </div>

    <div className="flex items-center gap-4">
      <img
        src="https://pagedone.io/asset/uploads/1696229994.png"
        className="w-12 h-12 rounded-full object-cover"
      />

      <div>
        <h4 className="font-semibold">Amit & Sneha</h4>
        <span className="text-sm text-gray-500">Wedding Success Story</span>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide className="h-auto">
  <div className="bg-white p-6 rounded-2xl shadow-lg border hover:border-pink-500 transition h-[360px] flex flex-col justify-between">
    <div>
      <div className="flex gap-1 text-yellow-400 mb-4 text-lg">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 mb-6">
        ShaadiJeevan ke profiles genuine thi aur humari family ko bhi comfortable feel hua. Match perfect mila, bahut khushi hai!
      </p>
    </div>

    <div className="flex items-center gap-4">
      <img
        src="https://pagedone.io/asset/uploads/1696230027.png"
        className="w-12 h-12 rounded-full object-cover"
      />

      <div>
        <h4 className="font-semibold">Karan & Meera</h4>
        <span className="text-sm text-gray-500">Happily Married</span>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide className="h-auto">
  <div className="bg-white p-6 rounded-2xl shadow-lg border hover:border-pink-500 transition h-[360px] flex flex-col justify-between">
    <div>
      <div className="flex gap-1 text-yellow-400 mb-4 text-lg">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 mb-6">
        Humari shaadi ShaadiJeevan ke through bahut easy aur memorable rahi. Profiles real the aur process secure tha. Strongly recommend!
      </p>
    </div>

    <div className="flex items-center gap-4">
      <img
        src="https://pagedone.io/asset/uploads/1696230050.png"
        className="w-12 h-12 rounded-full object-cover"
      />

      <div>
        <h4 className="font-semibold">Vikram & Priya</h4>
        <span className="text-sm text-gray-500">Married in 2025</span>
      </div>
    </div>
  </div>
</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewCard;
