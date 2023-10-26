import GithubLogo from "../Hero/socialsLogo/Github.png";
import TwitterLogo from "../Hero/socialsLogo/Twitter.png";
import LinkedinLogo from "../Hero/socialsLogo/Linkedin.png";

function Footer() {
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
    <footer className="footer">
      <p>&copy; 2023 Sushant Mishra</p>
      <div className="socials-wrapper-footer">
        {socialsData.map((social) => (
          <a href={social.url} target="_blank">
            <img src={social.image} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
