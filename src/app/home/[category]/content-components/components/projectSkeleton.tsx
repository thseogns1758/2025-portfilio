import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const projectSkeleton = () => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
      <Box sx={{ position: "relative" }}>
        <Skeleton variant="rounded" width="100%" height={200} />
        <Box
          p={2}
          pb={3}
          sx={{ position: "absolute", bottom: 0, width: "100%" }}
        >
          <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="60%" height={16} />
        </Box>
      </Box>
    </Grid>
  );
};

export default projectSkeleton;
