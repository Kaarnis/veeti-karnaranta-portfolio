import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile-pic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section className={styles.container}>
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
        I'm a Software Developer and Agile Master with a Bachelor's degree in Engineering. I work mostly with backend development using Java and Spring Boot, designing APIs, and building scalable systems. I also have a solid understanding of frontend technologies, giving me a full-picture view of the software development process.

I have experience with DevOps tools, CI/CD pipelines, and production monitoring, ensuring smooth deployments and reliable performance in live environments. I care about clean code, good architecture, and agile ways of working that help teams deliver efficiently. Always looking for ways to improve processes and make development smoother.
<br />
<br />
Also, a dad of one, balancing coding and parenting — both full of surprises
        </p>
      </div>
    </section>
  );
}

export default Hero;
