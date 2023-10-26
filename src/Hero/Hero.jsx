import HeroContent from "./HeroContent";
import StarSection from "./StarSection";
import Scroll from "./Scroll";
import Socials from "./Socials";

import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import { useEffect } from "react";

import { mobileFrom, to, desktopFrom } from "./animations/util";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

function Hero() {
  const viewPortWidth = useWindowDimensions().width;

  useEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    if (viewPortWidth <= 640) {
      gsap.fromTo(".hero", mobileFrom, to);
    } else {
      gsap.fromTo(".hero", desktopFrom, to);
    }

    let lenis;

    const initSmoothScrolling = () => {
      lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
      });

      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    initSmoothScrolling();
  }, []);

  return (
    <header id="hero" className="hero-wrapper">
      <div className="hero">
        <div className="hero-container">
          <HeroContent />
          <StarSection />
          <Scroll />
          <Socials />
        </div>
      </div>
    </header>
  );
}

export default Hero;
