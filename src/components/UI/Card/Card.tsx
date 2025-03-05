import React, { useState } from "react";
import styled from "./Card.module.scss";
import { Button } from "../Button/Button";
import { CardType } from "../../../utils/types";
import { FAKE_PHOTO } from "../../../utils/constants";

// карточка семинара


export type CardPropsType = {
  data: CardType;
  color?: "blue" | "yellow";
};

export const Card: React.FC<CardPropsType> = ({ data, color }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = () => {
    setIsImageLoaded(false);
  };

  let btnClass = `${styled.card}`;
  if (color) {
    btnClass += `${
      color === "blue"
        ? ` ${styled.blue}`
        : color === "yellow"
        ? `${styled.yellow}`
        : ""
    }`;
  }
  return (
    <div className={btnClass}>
      <img  src={`${isImageLoaded ? data.photo : FAKE_PHOTO}`} onLoad={handleImageLoad} onError={handleImageError} alt="баннер семинара" />
      <div className={styled.wrapper}>
        <div className={styled.content}>
          <h3 className={styled.title}>{data.title}</h3>
          <span className={styled.date}>{data.date}</span>
          <span className={styled.time}>{data.time}</span>
          <p className={styled.description}>{data.description}</p>
        </div>
        <Button color="blue">Edit</Button>
      </div>
    </div>
  );
};
