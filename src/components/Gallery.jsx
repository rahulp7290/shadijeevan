import React, { useState, useEffect } from "react";
import poster from "../assets/Gallery.png";

const Gallery = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => (prev < 1000 ? prev + 1 : 1000));
    }, 5);

    const interval2 = setInterval(() => {
      setCount2((prev) => (prev < 800 ? prev + 1 : 800));
    }, 5);

    const interval3 = setInterval(() => {
      setCount3((prev) => (prev < 2500 ? prev + 5 : 2500));
    }, 5);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="bg-rose-200 flex flex-col lg:flex-row gap-6 md:gap-10 px-4 sm:px-10 md:px-15 py-10 md:py-20">
      <img className="w-full lg:w-125 h-80 md:h-auto md:p-10 object-cover rounded-lg md:rounded-0" src={poster} />

      <div className="flex flex-col ml-0 md:ml-20 pt-5 md:pt-20 gap-4 flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">We Make Your Wedding</h1>

        <h1 className="text-pink-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-10">
          Journey Unforgettable
        </h1>

        <p className="text-sm sm:text-base md:text-lg mr-0 md:mr-20 mt-5 md:mt-10 tracking-widest leading-relaxed">
          Shaadi Jeevan offers Free Biodata creation, authentic Aadhaar-verified
          profiles, exclusive personalised matchmaking, and safe communication
          features—creating a premium and reliable experience for confident
          partner selection.
        </p>
       

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-5 md:mt-10">
          <div className="w-full sm:w-150px h-120px bg-white shadow-2xl flex flex-col items-center justify-center rounded-4xl p-4">
            <h4 className="text-2xl md:text-3xl text-amber-600 font-bold">{count1}+ </h4>
            <h4 className="mt-2 md:mt-3 font-serif text-sm md:text-base">Active Users</h4>
          </div>

          <div className="w-full sm:w-150px h-120px bg-white shadow-2xl flex flex-col items-center justify-center rounded-4xl p-4">
            <h4 className="text-2xl md:text-3xl font-bold text-amber-600">{count2}+</h4>
            <h4 className="mt-2 md:mt-3 font-serif text-sm md:text-base">Success Stories</h4>
          </div>

          <div className="w-full sm:w-150px h-120px bg-white shadow-2xl flex flex-col items-center justify-center rounded-4xl p-4">
            <h4 className="text-2xl md:text-3xl font-bold text-amber-600">{count3}+</h4>
            <h4 className="mt-2 md:mt-3 font-serif text-sm md:text-base">Verified Profiles</h4>
          </div>
        </div>
        <button className="bg-pink-700 py-2 px-4 md:px-20 text-white font-bold font-serif rounded-lg mt-5 md:mt-10 hover:bg-pink-900 cursor-pointer shadow-md w-fit text-sm md:text-base">
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default Gallery;
