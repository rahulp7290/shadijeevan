import React from "react";
import ImageGallery from "./ImageGallery";
const Gallery2 = () => {
  return (
    <div>
      <div className="py-12 md:py-30 px-4 sm:px-10 md:px-20 flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        <div className="flex flex-col w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl ml-0 md:ml-20 font-serif font-bold">
            Our Beautiful
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-2 md:mt-5 text-amber-600 ml-0 md:ml-20 font-serif font-bold">
            Journey Gallery
          </h1>
        </div>
        <div className="w-full lg:w-auto">
          <p className="text-sm sm:text-base md:text-lg ml-0 md:ml-52 px-0 md:px-2 max-w-lg mt-5 tracking-wide leading-loose text-gray-700">
            Experience the magic of real couples their first connection, their
            celebrations, and the love that began on Shaadi Jeevan. Discover
            real moments from couples who found their perfect match through
            Shaadi Jeevan.
          </p>
          <h3 className="font-extrabold underline cursor-pointer ml-0 md:ml-52 px-0 md:px-2 mt-5 text-sm md:text-base">
            SEE MORE
          </h3>
        </div>
      </div>
      <div>
        <ImageGallery />
      </div>
    </div>
  );
};

export default Gallery2;
