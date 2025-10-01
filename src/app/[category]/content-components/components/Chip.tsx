import React from "react";
import { Box } from "@mui/material";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="px-3 py-1 h-[50px] bg-gray-100 rounded flex items-center justify-center">
      <span>{children}</span>
    </Box>
  );
};

export default Chip;
