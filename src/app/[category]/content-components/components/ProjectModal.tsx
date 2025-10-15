import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./projectModal.css";

const ProjectModal = ({
  children,
  modalOpen,
  modalHandler,
}: {
  children: React.ReactNode;
  modalOpen: boolean;
  modalHandler: () => void;
}) => {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") modalHandler();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div>
      {modalOpen && (
        <div className="project-modal-container" onClick={modalHandler}>
          <div
            className="relative rounded-lg p-6 w-[100%] h-[80%]"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={modalHandler}
          >
            <CloseIcon sx={{ color: "white" }} />
          </button>

          <p className="close-text">
            esc 또는 x 버튼을 눌러 모달을 닫을 수 있습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
