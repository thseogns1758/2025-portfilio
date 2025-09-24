import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import ProjectSkeleton from "./projectSkeleton";
import { ProjectItemType, ProjectType } from "../../../type";

const ProjectGrid = ({
  projects,
  projectClickHandler,
  isLoading = false,
}: {
  projects: ProjectType;
  projectClickHandler: (project: ProjectItemType) => void;
  isLoading?: boolean;
}) => {
  return (
    <Box>
      <h1 className="text-3xl font-bold mb-6">Project</h1>

      {isLoading ? (
        <Box m={2}>
          <Skeleton variant="text" width={100} height={32} sx={{ mb: 2 }} />
          <Grid container spacing={4}>
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </Grid>
        </Box>
      ) : (
        projects.map(({ year, list }) => (
          <Box key={year} m={2}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              {year}
            </Typography>
            <Grid container spacing={4}>
              {list.map((project) => (
                <Grid
                  className="project-gridItem"
                  size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
                  sx={{ position: "relative" }}
                  key={project.id}
                  onClick={() => projectClickHandler(project)}
                >
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={project.src}
                      alt={project.alt}
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <Box
                      p={2}
                      pb={3}
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                        color: "white",
                        width: "100%",
                      }}
                    >
                      <Typography pb={1} fontSize={"1rem"}>
                        {project.title}
                      </Typography>
                      <Typography fontSize={"0.8rem"}>
                        {project.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ProjectGrid;
