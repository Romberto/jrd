import React from "react";
import styled from "./Modal.module.scss";
import { Form } from "react-router-dom";
import { Button } from "../Button/Button";

type Modal = {
  onClose: () => void;
};

export const Modal: React.FC<Modal> = ({ onClose }) => {
  const closeModal = () => {
    onClose();
  };
  return (
    <div className={styled.modal}>
      <div className={styled.wrapper}>
        <div className={styled.background}></div>
        <button onClick={closeModal} className={styled.close}>
          Close
        </button>
        <Form/>
      </div>
    </div>
  );
};
