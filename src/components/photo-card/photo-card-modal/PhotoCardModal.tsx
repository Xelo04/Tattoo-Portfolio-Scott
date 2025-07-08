import React from "react";
import "./photoCardModal.scss";

interface PhotoCardModalProps {
  imageSrc: string;
  onClose: () => void;
}

const PhotoCardModal: React.FC<PhotoCardModalProps> = ({
  imageSrc,
  onClose,
}) => {
  return (
    <div className="photo-card-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Modal" />
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default PhotoCardModal;
