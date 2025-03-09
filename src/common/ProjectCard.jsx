import React from "react";
import styles from "../sections/Projects/ProjectsStyles.module.css";

function ProjectCard({ src, link, h3, p, techUsed }) {
  const isMultiRepo = typeof link === "object";

  return (
    <div className={styles.card}>
      {isMultiRepo ? (
        <>
          <img className="hover" src={src} alt={`${h3} logo`} />
          <h3>{h3}</h3>
          <div className={styles.contentWrapper}>
            <div className={styles.descriptionWrapper}>
              <p>{p}</p>
            </div>
            <div className={styles.techWrapper}>
              <p className={styles.techUsed}>{techUsed}</p>
            </div>
            <div className={styles.links}>
              <a
                href={link.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoLink}
              >
                Frontend Repo
              </a>
              <a
                href={link.backend}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoLink}
              >
                Backend Repo
              </a>
            </div>
          </div>
        </>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
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
      )}
    </div>
  );
}

export default ProjectCard;
