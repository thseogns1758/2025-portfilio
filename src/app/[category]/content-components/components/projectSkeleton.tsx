import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const projectSkeleton = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Skeleton variant="rounded" width="100%" height="100%" />
      <Box p={2} pb={3} sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="60%" height={16} />
      </Box>
    </Box>
  );
};

export default projectSkeleton;
