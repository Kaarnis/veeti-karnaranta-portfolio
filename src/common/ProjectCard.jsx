import React from "react";
import styles from "../sections/Projects/ProjectsStyles.module.css";
function ProjectCard({ src, link, h3, p, techUsed }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p className={styles.techUsed}>{techUsed}</p>
    </a>
  );
}

export default ProjectCard;
