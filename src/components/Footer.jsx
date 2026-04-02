const Footer = () => {
  return (
    <>
      <div className="bg-pink-600">
        <div className="text-white text-center p-4 md:p-6 text-sm md:text-base">
          © 2026 ShadiJeevan. All Rights Reserved
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 text-white font-serif pb-4 md:pb-6 text-sm md:text-base">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
