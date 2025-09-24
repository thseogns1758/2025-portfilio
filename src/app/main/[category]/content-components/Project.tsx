"use client";

import { useState } from "react";
import { projects } from "../../../data";
import { ProjectType, ProjectItemType } from "../../../type";
import "./project-style.css";
import ProjectModal from "./components/ProjectModal";
import ProjectGrid from "./components/projectGrid";

const Project = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectItemType | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const projectClickHandler = (project: ProjectItemType) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const modalCloseHandler = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <ProjectGrid
        projects={projects}
        projectClickHandler={projectClickHandler}
      />
      <ProjectModal
        modalOpen={openModal}
        modalHandler={() => modalCloseHandler()}
      >
        {selectedProject && (
          <div>
            <img src={selectedProject.src} alt={selectedProject.alt} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </div>
        )}
      </ProjectModal>
    </div>
  );
};

export default Project;
