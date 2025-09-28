"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "../../data";
import { ProjectItemType } from "../../type";
import "./project-style.css";
import ProjectModal from "./components/ProjectModal";
import ProjectGrid from "./components/projectGrid";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // 기본 가로
              backgroundColor: "#fff6f4",
              padding: "20px",
              borderRadius: "10px",
              gap: "20px",
              "@media (max-width:950px)": {
                flexDirection: "column", // 950px 이하에서는 세로
              },
            }}
          >
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
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                maxWidth: "300px",
                paddingLeft: "20px",
                color: "#4b2e2e",
                "@media (max-width:950px)": {
                  maxWidth: "100%", // 작은 화면에서는 전체 너비
                  paddingLeft: 0, // 왼쪽 패딩 제거
                  marginTop: "16px", // 이미지와 간격
                },
              }}
            >
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </Box>
          </Box>
        )}
      </ProjectModal>
    </div>
  );
};

export default Project;
