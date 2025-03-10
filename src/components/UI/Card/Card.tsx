import React, { useEffect, useState } from "react";
import styled from "./Card.module.scss";
import { Button } from "../Button/Button";
import { CardType } from "../../../utils/types";
import FAKE_PHOTO from "../../../assets/noneforo-700x700.jpg";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";

// карточка семинара

export type CardPropsType = {
  data: CardType;
};

export const Card: React.FC<CardPropsType> = ({ data }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (hasImageError) {
      // Если произошла ошибка, не пытаемся загрузить изображение снова
      setIsImageLoaded(false);
    }
  }, [hasImageError]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    setHasImageError(false); // сброс флага ошибки
  };

  const handleImageError = () => {
    setIsImageLoaded(false);
    setHasImageError(true); // установить флаг ошибки
  };

  const handleClick = () => {
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styled.card}>

  {isModalOpen && 
    createPortal(
      <Modal onClose={closeModal} data={data}/>,
      document.getElementById("modal")!
    )}  
      <img
        src={isImageLoaded && !hasImageError ? data.photo : FAKE_PHOTO}
        onLoad={handleImageLoad}
        onError={handleImageError}
        alt="баннер семинара"
      />
      <div className={styled.wrapper}>
        <div className={styled.content}>
          <h3 className={styled.title}>{data.title}</h3>
          <span className={styled.date}>{data.date}</span>
          <span className={styled.time}>{data.time}</span>
          <p className={styled.description}>{data.description}</p>
        </div>
        <Button color="blue" onClick={handleClick}>
          Edit
        </Button>
      </div>
    </div>
  );
};
