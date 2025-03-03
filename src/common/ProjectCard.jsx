import React from "react";
import styles from "../sections/Projects/ProjectsStyles.module.css";

function ProjectCard({ src, link, h3, p, techUsed }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <div className={styles.contentWrapper}>
        <div className={styles.descriptionWrapper}>
          <p>{p}</p>
        </div>
        <div className={styles.techWrapper}>
          <p className={styles.techUsed}>{techUsed}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
