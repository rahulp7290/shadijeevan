import React from "react";

const Register = ({ close }) => {
  return (
    <div className="fixed top-16 md:top-20 right-4 md:right-10 z-50 w-[calc(100%-2rem)] sm:w-auto">
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full md:w-420px relative">
        <button onClick={close} className="absolute top-3 right-4 text-lg md:text-xl font-bold">
          ✖
        </button>

        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Register</h2>

        <form className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 md:p-3 rounded text-sm md:text-base w-full sm:w-1/2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 md:p-3 rounded text-sm md:text-base w-full sm:w-1/2"
            />
          </div>

          <input
            type="tel"
            placeholder="Mobile Number"
            className="border p-2 md:p-3 rounded text-sm md:text-base"
          />
          <input
            type="tel"
            placeholder="Alternate Mobile Number"
            className="border p-2 md:p-3 rounded text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 md:p-3 rounded text-sm md:text-base"
          />
          <input type="date" className="border p-2 md:p-3 rounded text-sm md:text-base" />
          <input type="time" className="border p-2 md:p-3 rounded text-sm md:text-base" />
          <select className="border p-2 md:p-3 rounded text-sm md:text-base">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <button className="bg-pink-600 text-white py-2 md:py-3 rounded hover:bg-pink-700 transition text-sm md:text-base">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
