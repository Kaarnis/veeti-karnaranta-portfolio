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
        <p className={styles.description}>
          <p>Hello and welcome to my website!</p>
          <br />
          I’m a recent Bachelor of Engineering graduate and a Software Developer
          with a strong focus on backend and API development. I’m most familiar
          with technologies like Java and Spring Boot, with a solid
          understanding of frontend technologies as well. Additionally, I’m
          well-versed in DevOps practices, including Kubernetes and Docker, and
          I’m knowledgeable about modern development methodologies and tools.
          I’m ready to apply my skills and continue growing in innovative
          development environments.
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
