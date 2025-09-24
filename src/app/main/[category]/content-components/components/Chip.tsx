import React from "react";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return <span className="px-3 py-1 bg-gray-100 rounded">{children}</span>;
};

export default Chip;
