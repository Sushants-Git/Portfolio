import HeroContent from "./HeroContent";
import StarSection from "./StarSection";
import Scroll from "./Scroll";

function Hero() {
  return (
    <header className="hero-wrapper">
      <div className="hero">
        <div className="hero-container">
          <HeroContent />
          <StarSection />
          <Scroll />
        </div>
      </div>
    </header>
  );
}

export default Hero;
