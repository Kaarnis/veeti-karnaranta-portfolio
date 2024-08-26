import styles from "./ProjectsStyles.module.css";
import climatechange from "../../assets/climatechange.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
import portfoliowebsite from "../../assets/portfoliowebsite.png";
import frevent from "../../assets/frevent.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/TVT21SPOWebR10/React_ClimateChangeApp">
          <img
            className="hover"
            src={climatechange}
            alt="climate change logo"
          />
          <h3>Climate change app</h3>
          <p>
            app to track impact of climate change across thousands
            of years sad asd asda sdsa  asd asd asd asd a asd asd ada  sadasd ad asdfasdfasd fasfd  asdf asdfa sdfa sdf asdf asdfa f asd
          </p>
        </a>
        <a href="https://github.com/Kaarnis/veeti-karnaranta-portfolio">
          <img className="hover" src={portfoliowebsite} alt="Portfolio logo" />
          <h3>Portfolio website</h3>
          <p>
            My personal portfolio <br /> website to showcase <br /> my skills
            and projects
          </p>
        </a>
        <a href="https://github.com/group7Frevent/Frevent">
          <img className="hover" src={frevent} alt="Frevent logo" />
          <h3>Frevent</h3>
          <p>
            Mobile application where <br /> users can create and <br />
            join events
          </p>
        </a>
        <a href="https://github.com/Kaarnis/FishingAPI">
          <img className="hover" src={frevent} alt="Fishing API logo" />
          <h3>Fishing API</h3>
          <p>
            Simple REST API <br /> to track fishing catches
          </p>
        </a>
        <a href="https://github.com/Kaarnis/FitnessTrackerAPI">
          <img className="hover" src={frevent} alt="Frevent logo" />
          <h3>Fitness tracker API</h3>
          <p>
            FitnesstrackerAPI is the backend <br />
            of a Fitness Tracker application.
          </p>
        </a>
        <a href="https://github.com/Kaarnis/Microservices">
          <img className="hover" src={frevent} alt="Microservices" />
          <h3>Microservices</h3>
          <p>
            This project demonstrates <br /> a microservices architecture <br />{" "}
            with two REST APIs <br /> that communicate seamlessly.
          </p>
        </a>

        {/* <ProjectCard
          src={climatechange}
          link="https://github.com/TVT21SPOWebR10/React_ClimateChangeApp"
          h3="Climate Change App"
          p="Application to track the impact of climate change across thousands of years"
        /> */}
        {/* <ProjectCard
          src={portfoliowebsite}
          link="https://github.com/Kaarnis/veeti-karnaranta-portfolio"
          h3="Portfolio website"
          p="This portfolio website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Kaarnis/veeti-karnaranta-portfolio"
          h3="Viberr"
          p="This portfolio website"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
