import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2 className={styles.categoryTitle}>Coding languages</h2>
      <h3 className={styles.categoryTitle}>Proficient</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Spring Boot" />
        <SkillList src={checkMarkIcon} skill="REST APIs" />
        <SkillList src={checkMarkIcon} skill="Microservices" />
        <SkillList src={checkMarkIcon} skill="Integrations" />
      </div>
      <hr />
      <h3 className={styles.categoryTitle}>Intermediate</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
      </div>
      <hr />
      <h2 className={styles.categoryTitle}>Other tools & technologies</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="Jenkins" />
        <SkillList src={checkMarkIcon} skill="Jira" />
        <SkillList src={checkMarkIcon} skill="Rancher" />
        <SkillList src={checkMarkIcon} skill="Splunk" />
      </div>
      <hr />
      <h2 className={styles.categoryTitle}>Soft skills</h2>
      <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Communication" />
          <SkillList src={checkMarkIcon} skill="Teamwork" />
          <SkillList src={checkMarkIcon} skill="Problem Solving" />
          <SkillList src={checkMarkIcon} skill="Adaptability" />
          <SkillList src={checkMarkIcon} skill="Time Management" />
        </div>
    </section>
  );
}

export default Skills;
