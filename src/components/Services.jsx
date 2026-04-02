import aadhar from "../assets/Aadhaar.png";
import biodata from "../assets/biodata.png";
import secure from "../assets/secure.png";
import profile from "../assets/Profile.png";

const Services = () => {
  return (
    <div className="min-h-screen py-12 md:py-25 bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
        What We Provide To Find Genuine Matches
      </h2>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-semibold max-w-2xl text-center">
        We provide trusted wedding solutions that deliver elegant, comfortable,
        and seamlessly planned celebrations, creating joyful and unforgettable
        experiences for every couple.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-12 md:py-20 w-full">
        <div className="p-5 md:p-6 bg-white shadow-lg rounded">
          <img src={biodata} className="w-full h-auto mb-4" />
          <h3 className="font-bold font-serif mb-4 text-sm md:text-base">Free Biodata Creation</h3>
          <p className="mb-4 text-xs md:text-sm">
            Create a professional, beautiful biodata instantly with our easy,
            free tool.
          </p>
          <h3 className="underline cursor-pointer text-xs md:text-sm"> SEE MORE</h3>
        </div>

        <div className="p-5 md:p-6 bg-white shadow-lg rounded">
          <img src={aadhar} className="w-full h-auto mb-4" />
          <h3 className="font-bold font-serif mb-4 text-sm md:text-base">
            Aadhaar-Verified Profiles
          </h3>
          <p className="mb-5 text-xs md:text-sm">
            Every profile is Aadhaar-verified to ensure genuine users and
            authentic connections.s
          </p>
          <h3 className="underline cursor-pointer text-xs md:text-sm"> SEE MORE</h3>
        </div>

        <div className="p-5 md:p-6 bg-white shadow-lg rounded">
          <img src={profile} className="w-full h-auto mb-4" />
          <h3 className="font-bold font-serif mb-4 text-sm md:text-base">Profile Matching</h3>
          <p className="mb-5 text-xs md:text-sm">
            Smart algorithms match you with compatible profiles based on values
            and preferences.
          </p>
          <h3 className="underline cursor-pointer text-xs md:text-sm"> SEE MORE</h3>
        </div>
        <div className="p-5 md:p-6 bg-white shadow-lg rounded">
          <img src={secure} className="w-full h-auto mb-4" />
          <h3 className="font-bold font-serif mb-4 text-sm md:text-base">Secure Platform</h3>
          <p className="mb-5 text-xs md:text-sm">
            A safe, private, and trusted platform ensuring complete protection
            of your personal details.
          </p>
          <h3 className="underline cursor-pointer text-xs md:text-sm"> SEE MORE</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
