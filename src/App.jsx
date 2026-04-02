import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Gallery2 from "./components/Gallery2.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import Review from "./components/Review.jsx";
function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallery2">
        <Gallery />
      </section>

      <section id="gallery">
        <Gallery2 />
      </section>

      <section id="image">
        <Review />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
