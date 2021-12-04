import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/TestimonialsCarousel";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
//import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            shape: {
              type: "circle",
              stroke: {
                width: 12,
                color: "#3ca6b1",
              },
            },
            number: {
              value: 30,

              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
