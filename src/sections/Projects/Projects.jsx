import styles from "./ProjectsStyles.module.css";
import climatechange from "../../assets/climatechange.png";
import portfoliowebsite from "../../assets/portfoliowebsite.png";
import frevent from "../../assets/frevent.png";
import fishingapi from "../../assets/fishingapi.png";
import fitnesstrackerbackend from "../../assets/fitnesstrackerbackend.png";
import kalastus from "../../assets/kalastus.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const projects = [
    {
      src: kalastus,
      link: {
        frontend: "https://github.com/Kaarnis/fishing_tracker_frontend",
        backend: "https://github.com/Kaarnis/fishing_tracker_API",
      },
      h3: "Fishing Trip Tracker",
      p: "Full-stack application for tracking fishing activities.",
      techUsed:
        "Technologies: React, TypeScript, Spring Boot, PostgreSQL, Docker, GitHub Actions, Automated CI/CD pipeline and deployments to railway",
    },
    {
      src: climatechange,
      link: "https://github.com/TVT21SPOWebR10/React_ClimateChangeApp",
      h3: "Climate Change Analytics",
      p: "Interactive data visualization platform for analyzing long-term climate change patterns.",
      techUsed: "Technologies: React, Node.js, SQL",
    },
    {
      src: portfoliowebsite,
      link: "https://github.com/Kaarnis/veeti-karnaranta-portfolio",
      h3: "Portfolio Website",
      p: "Modern portfolio with responsive design and dark mode implementation.",
      techUsed: "Technologies: React, CSS Modules, EmailJS",
    },
    {
      src: frevent,
      link: "https://github.com/group7Frevent/Frevent",
      h3: "Frevent Mobile App",
      p: "Location-based event discovery and management application with real-time updates.",
      techUsed: "Technologies: React Native, Node.js, Firebase",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Some of my projects</h1>
      <p className={styles.subtitle}>
        Click on the projects to view the code on GitHub.
      </p>
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
