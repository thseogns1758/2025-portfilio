import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const ProjectModal = ({
  children,
  modalOpen,
  modalHandler,
}: {
  children: React.ReactNode;
  modalOpen: boolean;
  modalHandler: () => void;
}) => {
  return (
    <div>
      {modalOpen && (
        <div
          className="bg-[rgba(0,0,0,0.5)]  fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex items-center justify-center"
          onClick={modalHandler}
        >
          {children}
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={modalHandler}
          >
            <CloseIcon sx={{ color: "white" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
