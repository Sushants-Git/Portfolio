import KeeperImage from "./Images/Keeper.png";
import YoutubeController from "./Images/Youtube Controller.png";
import MovieWatchlist from "./Images/Movie Watchlist.png";
import Portfolio from "./Images/Portfolio.png";
import GithubImage from "./Images/svg/Github.svg";
import YoutubeImage from "./Images/svg/Youtube.svg";
import LiveLink from "./Images/svg/LiveLink.svg";

import greenOpenBracket from "../assets/brackets/green-opening.svg";
import greenCloseBracket from "../assets/brackets/green-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useEffect } from "react";

const projects = [
  {
    imagePath: KeeperImage,
    projectName: "Keeper",
    projectText:
      "Keeper is a markdown editor and previewer. Many existing editors were bolted with features, still lacking functionalities like text-to-speech and comprehensive code syntax highlighting. So, to solve this i built keeper!!",
    toolsUsed: ["React", "Figma"],
    LinkImage: [YoutubeImage, GithubImage, LiveLink],
    Link: [
      "https://www.youtube.com/watch?v=e6AruCsCuew",
      "https://github.com/Sushants-Git/keeper",
      "https://keeper-sushant.netlify.app/",
    ],
    Live: "https://keeper-sushant.netlify.app/",
  },
  {
    imagePath: YoutubeController,
    projectName: "Youtube Controller",
    projectText:
      "Do you ever struggle with managing numerous open tabs, especially when one of them contains a YouTube video playing music or a podcast? It's frustrating to find and control that specific tab. To make your life easier, I've created a Chrome extension to solve this problem!",
    toolsUsed: ["JS", "Chrome API"],
    LinkImage: [YoutubeImage, GithubImage],
    Link: [
      "https://www.youtube.com/watch?v=thTurAtNi2I",
      "https://github.com/Sushants-Git/Youtube-Controller",
    ],
    Live: "https://github.com/Sushants-Git/Youtube-Controller",
  },
  {
    imagePath: MovieWatchlist,
    projectName: "Movie Watchlist",
    projectText:
      "A simple Moive watch list app where you can add movies you want to watch and remove them when you finish watching them.",
    toolsUsed: ["JS", "Restful API"],
    LinkImage: [YoutubeImage, GithubImage, LiveLink],
    Link: [
      "https://www.youtube.com/watch?v=6Ncns21uPHk",
      "https://github.com/Sushants-Git/Movie-Watchlist",
      "https://movie-watchlist-by-sushant.netlify.app/",
    ],
    Live: "https://movie-watchlist-by-sushant.netlify.app/",
  },
  {
    imagePath: Portfolio,
    projectName: "Portfolio",
    projectText:
      "Yep, this site that you are currently seeing right now!! One of my cleanest projects both in terms of design and code!!",
    toolsUsed: ["React", "GSAP", "Figma"],
    LinkImage: [YoutubeImage, GithubImage, LiveLink],
    Link: [
      "https://www.youtube.com/watch?v=Wh9frqb9Eio",
      "https://github.com/Sushants-Git/Portfolio",
      "https://sushantmishra.netlify.app/",
    ],
    Live: "https://sushantmishra.netlify.app/",
  },
];

function Projects() {
  const viewPortWidth = useWindowDimensions().width;
  const projectDiv = projects.map((project) => (
    <div className="project-wrapper" key={project.projectName}>
      <div className="project">
        <div className="project-image">
          <a href={project.Live} target="_blank">
            <img src={project.imagePath} alt="project image" />
          </a>
        </div>
        <div className="project-content">
          <a href={project.Live} target="_blank">
            <p className="project-name">{project.projectName}</p>
          </a>
          <p className="project-text">{project.projectText}</p>
          <p className="project-toolused">
            {project.toolsUsed.map((toolused, index) => (
              <span key={`${project.Live}-${toolused}`}>{toolused}</span>
            ))}
          </p>
          <div className="project-links">
            {project.LinkImage.map((link, index) => (
              <a
                key={project.Link[index]}
                href={project.Link[index]}
                target="_blank"
              >
                <img src={link} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  useEffect(
    function () {
      let animation = gsap.fromTo(
        "#projects-title-wrapper",
        {
          fontSize: "3vw",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#projects-title-wrapper p",
            toggleActions: "play none none reset",
            start: "top +=90%",
          },
          fontSize: "64px",
          opacity: 1,
        }
      );

      return () => {
        animation.kill();
        animation = null;
      };
    },
    [viewPortWidth]
  );

  return (
    <section id="projects" className="projects">
      <div className="title-wrapper" id="projects-title-wrapper">
        <img src={greenOpenBracket} alt="opening bracket" />
        <p className="title">Projects</p>
        <img src={greenCloseBracket} alt="closing bracket" />
      </div>
      <div className="projects-wrapper">{projectDiv}</div>
    </section>
  );
}

export default Projects;

/* <div className="project-wrapper">
        <div className="project">
        <div className="project-image">
            <img src={projects[0].imagePath} alt="project image" />
        </div>
        <div className="project-content">
            <p className="project-name">{projects[0].projectName}</p>
            <p className="project-text">{projects[0].projectText}</p>
            <p className="project-toolused">{projects[0].toolsUsed[0]}</p>
            <div className="project-links">
            {projects[0].Links.map((link) => (
                <img src={link} />
            ))}
            </div>
        </div>
        </div>
    </div> */
