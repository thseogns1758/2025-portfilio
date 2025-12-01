import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import ProjectSkeleton from "./projectSkeleton";
import ImageWithSkeleton from "./ImageWithComponent";
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
      <h1 className="text-3xl font-bold mb-30">Project</h1>

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
          <Box key={year} m={2} mb={10}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              - {year} -
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
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                    }}
                  >
                    {/* ImageWithSkeleton 컴포넌트 사용 */}
                    <ImageWithSkeleton
                      src={project.src}
                      alt={project.alt}
                      skeletonComponent={<ProjectSkeleton />}
                    />
                    <Box
                      p={2}
                      pb={3}
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                        color: "white",
                        width: "100%",
                        height: 100,
                      }}
                    >
                      <Typography pb={1} fontSize={"1rem"}>
                        {project.title}
                      </Typography>
                      <Typography
                        fontSize={"0.8rem"}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
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
