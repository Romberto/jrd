import React from "react";
import styled from "./Modal.module.scss";
import { Form } from "../Form/Form";

type Modal = {
  onClose: () => void;
};

export const Modal: React.FC<Modal> = ({ onClose }) => {
  const closeModal = () => {
    onClose();
  };
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={styled.modal}>
      <div className={styled.wrapper} onClick={handleCloseModal}>
        <button onClick={closeModal} className={styled.close}>
          Close
        </button>
        <Form onClose={onClose} />
      </div>
    </div>
  );
};
