import Blogs from "../Components/LandingPage/Blogs";
import Footer from "../Components/LandingPage/Footer";
import Hero from "../Components/LandingPage/Hero";
import HeroEnd from "../Components/LandingPage/HeroEnd";
import Tours from "../Components/LandingPage/Tours";
import Values from "../Components/LandingPage/Values";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <div className="lg:px-20">
      <NavBar />
      <Hero />
      <Values />
      <Tours />
      <Blogs />
      <HeroEnd />
      <Footer />
    </div>
  );
};
export default HomePage;
