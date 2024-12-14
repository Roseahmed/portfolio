import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Expericence from "../components/Experience";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
// import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <Profile />
        </div>
        <div className="content">
          <About />
          <Skills />
          <Expericence />
          <Portfolio />
          <Testimonial />
          <Services />
          <Contact />
          <Footer />
        </div>
      </div>
      {/* WhatsApp Icon Fixed at Bottom Right */}
      <a
        href="https://wa.me/919706736327"
        className="whatsapp-fixed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} beat />
      </a>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}
