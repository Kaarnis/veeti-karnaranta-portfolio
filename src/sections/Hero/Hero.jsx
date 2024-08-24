import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile-pic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV-esimerkki.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Veeti Karnaranta"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Veeti
          <br />
          Karnaranta
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://github.com/Kaarnis" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/veekar/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          I’m a Software Developer with a strong focus on backend and API
          development, particularly using Java and Spring Boot. As a Developer
          Trainee at OP, I’ve honed my skills in backend technologies while
          maintaining a solid understanding of frontend development, aiming to
          grow into full-stack expertise.
        </p>

        <p>
          Beyond coding, I’m experienced in the full software delivery
          lifecycle, including deployment and DevOps practices like Kubernetes
          and Docker. My background in sales and competitive ice hockey has
          equipped me with strong teamwork, communication, and
          discipline—qualities I bring to every project.
        </p>

        <p>
          I’m passionate about technology, quick to learn, and eager to
          contribute to innovative teams and projects where I can continue to
          grow and make an impact.
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
