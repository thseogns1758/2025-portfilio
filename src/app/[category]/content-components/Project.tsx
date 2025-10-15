"use client";

import { useState } from "react";
import { projects } from "../../data";
import { ProjectItemType } from "../../type";
import "./project-style.css";
import ProjectModal from "./components/ProjectModal";
import ProjectGrid from "./components/projectGrid";
import { Box } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import "./project-style.css";
import Image from "next/image";
const Project = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectItemType | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

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
          <Box className="project-modal-item">
            <Box
              sx={{
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",

                flex: 1,
              }}
            >
              <img
                src={selectedProject.src}
                alt={selectedProject.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                maxWidth: "300px",
                paddingLeft: "20px",
                position: "relative",
                color: "#4b2e2e",
                "@media (max-width:950px)": {
                  maxWidth: "100%",
                  paddingLeft: 0,
                  marginTop: "16px",
                },
              }}
            >
              <h2 className="project-title">
                {selectedProject.title.toUpperCase()}
              </h2>
              <Box className="project-description-container">
                <p className="project-description">
                  {selectedProject.description}
                </p>
              </Box>

              <a
                className="project-link"
                href={selectedProject.url}
                target="_blank"
              >
                링크로 이동하기 <InsertLinkIcon />
              </a>
              {selectedProject.qrUrl !== "" && (
                <img
                  src={selectedProject.qrUrl}
                  alt={selectedProject.alt}
                  width={200}
                  height={200}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                />
              )}
            </Box>
          </Box>
        )}
      </ProjectModal>
    </div>
  );
};

export default Project;
