import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ocean-dark/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sun">
        <p>© {year} Hannah Høilo</p>

        <div className="flex gap-5 text-3xl">
          <a
            href="https://github.com/Hannahhoilo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-aqua focus-visible:outline-2 focus-visible:outline-aqua"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/hannahhøilo/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-aqua focus-visible:outline-2 focus-visible:outline-aqua"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
