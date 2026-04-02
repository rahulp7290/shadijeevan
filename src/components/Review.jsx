import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <section className="bg-rose-300 py-24 mt-20">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex justify-center mb-16">
          <div className="bg-white shadow-2xl p-10 rounded-xl text-center">
            <h1 className="font-serif text-5xl font-bold">Client Review To</h1>
            <h1 className="font-serif text-pink-500 text-5xl font-bold mt-2">
              Our Service
            </h1>
          </div>
        </div>
        <ReviewCard />
      </div>
    </section>
  );
};

export default Review;
