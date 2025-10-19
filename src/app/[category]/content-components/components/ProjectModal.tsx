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
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") modalHandler();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [modalOpen, modalHandler]);

  return (
    <div>
      {modalOpen && (
        <div className="project-modal-background" onClick={modalHandler}>
          <div
            className="project-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal">{children}</div>
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
