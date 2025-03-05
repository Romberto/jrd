import React from "react";
import styled from "./Modal.module.scss";
import { Form } from "../Form/Form";
import { CardType } from "../../../utils/types";

type Modal = {
  onClose: () => void;
  data?: CardType
};

export const Modal: React.FC<Modal> = ({ onClose, data }) => {
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
        { data ? <Form onClose={onClose} data={data}/> : <Form onClose={onClose}/>}
        
        
      </div>
    </div>
  );
};
