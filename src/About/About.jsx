import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

function About() {
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="left-side-wrapper">
          <LeftSide />
        </div>
        <div className="right-side-wrapper">
          <RightSide />
        </div>
      </div>
    </section>
  );
}

export default About;