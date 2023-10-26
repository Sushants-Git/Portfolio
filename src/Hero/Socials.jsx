import GithubLogo from "./socialsLogo/Github.png";
import TwitterLogo from "./socialsLogo/Twitter.png";
import LinkedinLogo from "./socialsLogo/Linkedin.png";

function Socials() {
  let socialsData = [
    {
      image: GithubLogo,
      url: "https://github.com/Sushants-Git",
    },
    {
      image: TwitterLogo,
      url: "https://twitter.com/sushantstwt",
    },
    {
      image: LinkedinLogo,
      url: "https://www.linkedin.com/in/sushants-li/",
    },
  ];
  return (
    <div className="socials-wrapper">
      {socialsData.map((social) => (
        <a key={`${social.url}-Hero`} href={social.url} target="_blank">
          <img src={social.image} alt="" />
        </a>
      ))}
    </div>
  );
}

export default Socials;
