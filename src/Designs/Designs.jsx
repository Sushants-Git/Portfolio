import indigoOpenBracket from "../assets/brackets/indigo-opening.svg";
import indigoCloseBracket from "../assets/brackets/indigo-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useState, useLayoutEffect, useRef, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Designs() {
  const [fetchedImages, setFetchedImages] = useState(false);
  const [designs, setDesigns] = useState(null);
  const animation = useRef(null);
  const viewPortWidth = useWindowDimensions().width;

  useLayoutEffect(
    function () {
      if (viewPortWidth <= 640) {
        animation.current = null;
        return;
      }
      animation.current = gsap.fromTo(
        "#designs-title-wrapper",
        {
          fontSize: "3vw",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#designs-title-wrapper p",
            toggleActions: "play none none reset",
            start: "top +=90%",
          },
          fontSize: "64px",
          opacity: 1,
        }
      );

      return () => {
        animation.current?.kill();
        animation.current = null;
      };
    },
    [viewPortWidth]
  );

  const importImages = async () => {
    const imagePaths = import.meta.glob("./Design Images/*.{png,jpg,jpeg,svg}");
    const images = {};

    for (const path in imagePaths) {
      const imageModule = await imagePaths[path]();
      images[path] = imageModule.default || imageModule;
    }

    const imageArray = Object.values(images).map((design) => {
      return {
        imagePath: design,
      };
    });

    setFetchedImages(true);
    setDesigns((prevValue) => imageArray);

    return imageArray;
  };

  if (!fetchedImages) {
    importImages();
  }

  // function popup(currentElement) {
  //   console.log(currentElement.target);
  //   gsap.to(currentElement.target, {
  //     width: "100vw",
  //   });

  //   console.log(currentElement.target)
  // }

  const designDiv = useMemo(
    function () {
      return fetchedImages
        ? designs.map((design) => (
            <div className="design-wrapper" key={uuidv4()}>
              <div className="design">
                <div className="design-image">
                  <img
                    src={design.imagePath}
                    alt="design image"
                  />
                </div>
              </div>
            </div>
          ))
        : null;
    },
    [fetchedImages]
  );

  return (
    <section id="designs" className="designs">
      <div className="title-wrapper" id="designs-title-wrapper">
        <img src={indigoOpenBracket} alt="opening bracket" />
        <p className="title">Designs</p>
        <img src={indigoCloseBracket} alt="closing bracket" />
      </div>
      <div className="designs-wrapper">{designDiv}</div>
    </section>
  );
}
