import styles from "./ProjectsStyles.module.css";
import climatechange from "../../assets/climatechange.png";
import portfoliowebsite from "../../assets/portfoliowebsite.png";
import frevent from "../../assets/frevent.png";
import fishingapi from "../../assets/fishingapi.png";
import fitnesstrackerbackend from "../../assets/fitnesstrackerbackend.png";
import ProjectCard from "../../common/ProjectCard"

function Projects() {
  const projects = [
    {
      src: climatechange,
      link: "https://github.com/TVT21SPOWebR10/React_ClimateChangeApp",
      h3: "Climate change app",
      p: "Software to track impact of climate change across thousands of years",
      techUsed: "Technologies Used: React, Node.js, SQL",
    },
    {
      src: portfoliowebsite,
      link: "https://github.com/Kaarnis/veeti-karnaranta-portfolio",
      h3: "Portfolio website",
      p: "My personal portfolio website to showcase my skills and projects",
      techUsed: "Technologies Used: React, CSS, EmailJS",
    },
    {
      src: frevent,
      link: "https://github.com/group7Frevent/Frevent",
      h3: "Frevent",
      p: "Mobile application where users can create and join events",
      techUsed: "Technologies Used: React Native, Node.js, Firebase",
    },
    {
      src: fishingapi,
      link: "https://github.com/Kaarnis/FishingAPI",
      h3: "Fishing API",
      p: "Simple REST API to track fishing catches",
      techUsed: "Technologies Used: Java, Spring Boot, JPA, H2, JUnit, Mockito, Docker",
    },
    {
      src: fitnesstrackerbackend,
      link: "https://github.com/Kaarnis/FitnessTrackerAPI",
      h3: "Fitness tracker API",
      p: "FitnesstrackerAPI is the backend of a Fitness Tracker application.",
      techUsed: "Technologies Used: Java, Spring Boot, MySQL",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
            techUsed={project.techUsed}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
