function HeroContent() {
  return (
    <div className="hero-content">
      <div className="intro-main">
        <div className="intro-main-container">
          <p>Hi, my</p>
          <p>
            name is{" "}
            <span className="space blue-gradient desktop-name">Sushant.</span>
          </p>
        </div>
        <span className="space blue-gradient mobile-name">Sushant.</span>
      </div>
      <div className="intro-extra">
        <p>
          I'm a <span className="space pink-gradient">developer</span> and{" "}
          <span className="space green-gradient">designer</span> from
        </p>
        <p>Telangana, India.</p>
      </div>
    </div>
  );
}

export default HeroContent;
