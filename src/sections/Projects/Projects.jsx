import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/group7Frevent/Frevent"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/TVT21SPOWebR10/React_ClimateChangeApp"
          h3="Fresh Burger"
          p="Climate Change App"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/Kaarnis/veeti-karnaranta-portfolio"
          h3="Viberr"
          p="This portfolio website"
        />
      </div>
    </section>
  );
}

export default Projects;
