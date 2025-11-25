import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [activeProject, setActiveProject] = React.useState(null);
  const openDetails = project => setActiveProject(project);
  const openPrivate = project => setActiveProject({ projectName: project.projectName, details: project.privateNotice });
  const closeDetails = () => setActiveProject(null);
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {(project.footerLink && project.footerLink.length) || project.details ? (
                      <div className="project-card-footer">
                        {project.footerLink && project.footerLink.map((link, i) => (
                          <span
                            key={i}
                            className={isDark ? "dark-mode project-tag" : "project-tag"}
                            onClick={() => (link.name === "Contact for details" && project.privateNotice) ? openPrivate(project) : openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                        {project.details ? (
                          <span
                            className={isDark ? "dark-mode project-tag" : "project-tag"}
                            onClick={() => openDetails(project)}
                          >
                            More details
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      {activeProject && (
        <div className="project-overlay" onClick={closeDetails}>
          <div className={isDark ? "dark-mode project-modal" : "project-modal"} onClick={e => e.stopPropagation()}>
            <div className="project-modal-header">
              <h3>{activeProject.projectName}</h3>
              <button className="close-btn" onClick={closeDetails}>×</button>
            </div>
            <div className="project-modal-body">
              <pre>{activeProject.details}</pre>
            </div>
          </div>
        </div>
      )}
      </div>
    </Fade>
  );
}
