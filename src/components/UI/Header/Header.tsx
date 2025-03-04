import React, { useState } from "react";
import styled from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";

export const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={styled.header}>
      <Link to="/" className={styled.logo}>
        Seminars
      </Link>
      <Button className={styled.btn} color="blue" onClick={handleClick}>
        Add seminar
      </Button>
      {isModalOpen &&
        createPortal(
          <Modal onClose={closeModal}/>,
          document.getElementById("modal")!
        )}
    </header>
  );
};
