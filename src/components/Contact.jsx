const Contact = () => {
  return (
    <div className="py-12 md:py-25 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 sm:px-10 md:px-20">
      <div className="px-0 md:px-30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">Book For AN</h1>
        <h1 className="text-amber-600 text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
          Appointment
        </h1>

        <p className="text-sm sm:text-base md:text-lg py-6 md:py-10 max-w-lg tracking-wide">
          {" "}
          Book your appointment for expert support with Aadhaar-verified
          matches, biodata creation, secure communication, and smart matchmaking
          tools.
        </p>

        <h1 className="text-2xl md:text-4xl font-bold font-serif">Our Info</h1>
        <div className="text-sm md:text-lg py-4 md:py-5 leading-loose">
          <h1 className="mb-2"> 📞: +91 123456789 </h1>
          <h1 className="mb-2"> 📧: support@shadijeevan.com</h1>
          <h1>📍: Jabalpur, MP.</h1>
        </div>
      </div>

      
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl mr-0 md:mr-20">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Contact Us</h2>

        <form className="flex flex-col gap-4 md:gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 md:p-3 rounded-lg text-sm md:text-base"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 md:p-3 rounded-lg text-sm md:text-base"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 md:p-3 rounded-lg text-sm md:text-base"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="border p-2 md:p-3 rounded-lg text-sm md:text-base"
          ></textarea>

          <button className="bg-pink-600 text-white py-2 md:py-3 rounded-lg hover:bg-pink-900 text-sm md:text-base">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
