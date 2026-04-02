import shadiImage from "../assets/shadi3.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={shadiImage}
        className="w-full h-screen object-cover rounded-0 md:rounded-3xl"
      />

      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:ml-10 md:px-10 text-black bg-linear-to-r from-white via-white/80 to-transparent">
        <h1 className="text-sm sm:text-lg md:text-xl font-bold mt-5 font-sans">Hello and Welcome</h1>
        <div className="mt-5">
          <h4 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-serif">Discover Your </h4>
          <h4 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-amber-600">Life Partner </h4>
          <h4 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-serif">With Us </h4>
        </div>
        <p className="max-w-xs sm:max-w-md md:max-w-lg font-serif mt-5 md:mt-10 text-sm sm:text-base md:text-lg">
          Shaadi Jeevan is a trusted matrimony platform that simplifies partner
          search with Aadhaar-verified profiles, free biodata creation tools,
          secure private chatting, and advanced matchmaking features. Designed
          for single-caste communities, we help users find genuine, compatible,
          and meaningful life partners with ease.
        </p>
        <button className="bg-pink-700 py-2 px-3 sm:px-4 font-bold font-serif text-xs sm:text-sm md:text-base text-white rounded-lg mt-5 md:mt-10 hover:bg-pink-900 cursor-pointer shadow-md w-fit">
          FREE BIODATA
        </button>
      </div>
    </div>
  );
};

export default Hero;
