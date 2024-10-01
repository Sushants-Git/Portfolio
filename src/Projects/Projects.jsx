import KeeperImage from "./Images/Keeper.png";
import YoutubeController from "./Images/Youtube Controller.png";
import DejaVu from "./Images/Deja Vu.png";
import VagueFinder from "./Images/Vague Finder.png";
import Faucet from "./Images/Faucet.png";
import MovieWatchlist from "./Images/Movie Watchlist.png";
import Portfolio from "./Images/Portfolio.png";
import GithubImage from "./Images/svg/Github.svg";
import YoutubeImage from "./Images/svg/Youtube.svg";
import LiveLink from "./Images/svg/LiveLink.svg";

import greenOpenBracket from "../assets/brackets/green-opening.svg";
import greenCloseBracket from "../assets/brackets/green-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const projects = [
    {
        imagePath: DejaVu,
        projectName: "Deja Vu",
        projectText:
            "Never struggle to remember your bookmarks again! Deja Vu, an AI-powered Chrome extension, seamlessly finds bookmarks—just jot down any vague details, and it effortlessly locates them for you.",
        toolsUsed: ["JS", "Chrome API"],
        LinkImage: [YoutubeImage, GithubImage],
        Link: [
            "https://www.youtube.com/watch?v=1E9y_XeGhkY&t=4s",
            "https://github.com/Sushants-Git/Deja-Vu",
        ],
        Live: "https://www.youtube.com/watch?v=1E9y_XeGhkY&t=4s",
    },
    {
        imagePath: Faucet,
        projectName: "Btc & Evm Faucet",
        projectText:
            "Bitcoin & EVM testnet faucet that allows users to obtain free testnet tokens. these tokens are used for testing purposes on the testnet, which is separate from the main bitcoin & evm network. the platform enables developers and testers to experiment with bitcoin transactions without using real cryptocurrency.",
        toolsUsed: ["Rust","TypeScript","React.js"],
        LinkImage: [LiveLink],
        Link: [
            "https://testnetbtc.com/"
        ],
        Live: "https://testnetbtc.com/",
    },
    {
        imagePath: VagueFinder,
        projectName: "Vague Finder",
        projectText:
            "vagueFinder is a simple and easy-to-use package for sentence similarity operations, primarily created for searching operations. It also offers caching for performance optimization.",
        toolsUsed: ["JS", "NPM"],
        LinkImage: [YoutubeImage, GithubImage],
        Link: [
            "https://www.youtube.com/watch?v=NeF0qLB2EJY&t=1s",
            "https://github.com/Sushants-Git/vague-finder",
        ],
        Live: "https://www.youtube.com/watch?v=NeF0qLB2EJY&t=1s",
    },
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
        Live: "https://www.youtube.com/watch?v=e6AruCsCuew",
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
        Live: "https://www.youtube.com/watch?v=thTurAtNi2I",
    },
    // {
    //   imagePath: Portfolio,
    //   projectName: "Portfolio",
    //   projectText:
    //     "Yep, this site that you are currently seeing right now!! One of my cleanest projects both in terms of design and code!!",
    //   toolsUsed: ["React", "GSAP", "Figma"],
    //   LinkImage: [YoutubeImage, GithubImage, LiveLink],
    //   Link: [
    //     "https://www.youtube.com/watch?v=Wh9frqb9Eio",
    //     "https://github.com/Sushants-Git/Portfolio",
    //     "https://sushantmishra.netlify.app/",
    //   ],
    //   Live: "https://sushantmishra.netlify.app/",
    // },
    // {
    //   imagePath: MovieWatchlist,
    //   projectName: "Movie Watchlist",
    //   projectText:
    //     "A simple Moive watch list app where you can add movies you want to watch and remove them when you finish watching them.",
    //   toolsUsed: ["JS", "Restful API"],
    //   LinkImage: [YoutubeImage, GithubImage, LiveLink],
    //   Link: [
    //     "https://www.youtube.com/watch?v=6Ncns21uPHk",
    //     "https://github.com/Sushants-Git/Movie-Watchlist",
    //     "https://movie-watchlist-by-sushant.netlify.app/",
    //   ],
    //   Live: "https://movie-watchlist-by-sushant.netlify.app/",
    // },
];

let gradients = ["green", "pink", "blue"];
let borderColor = ["#39F8B1", "#FEAADF", "#2995BA"];

function Projects() {
    const viewPortWidth = useWindowDimensions().width;
    const projectDiv = projects.map((project, mainIndex) => (
        <div className="project-wrapper" key={project.projectName}>
            <div className="project">
                <div className="project-image">
                    <a href={project.Live} target="_blank">
                        <img
                            src={project.imagePath}
                            alt="project image"
                            style={{
                                border: `1px solid ${borderColor[mainIndex % borderColor.length]
                                    }`,
                            }}
                        // onMouseEnter={(currentElement) =>
                        //   console.log(
                        //     (currentElement.target.style.border = `1px solid ${
                        //       borderColor[mainIndex % borderColor.length]
                        //     }`)
                        //   )
                        // }

                        // onMouseLeave={(currentElement) =>
                        //   console.log(
                        //     (currentElement.target.style.border = `none`)
                        //   )
                        // }
                        />
                    </a>
                </div>
                <div className="project-content">
                    <a href={project.Live} target="_blank">
                        <p className="project-name">
                            <span
                                className={`${gradients[mainIndex % gradients.length]
                                    }-gradient`}
                            >
                                {project.projectName}
                            </span>
                        </p>
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

    useLayoutEffect(
        function() {
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
