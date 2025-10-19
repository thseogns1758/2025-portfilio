import React from "react";
import { Box } from "@mui/material";
import "./chip.css";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="chip">
      <span>{children}</span>
    </Box>
  );
};

export default Chip;
