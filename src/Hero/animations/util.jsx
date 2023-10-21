const mobileFrom = {
  width: "97vw",
  height: "94vh",
  margin: "12px",
  borderRadius: "26px",
};

const to = {
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.5,
    start: "top top",
    end: "+=60% +=30%",
  },
  width: "100vw",
  height: "100vh",
  margin: "0px",
  borderRadius: "0px",
};

const desktopFrom = {
  width: "97vw",
  height: "94vh",
  margin: "25px",
  borderRadius: "57px",
};

export { mobileFrom, to, desktopFrom };
