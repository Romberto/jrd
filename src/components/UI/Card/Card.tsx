import React from "react";
import styled from "./Card.module.scss";
import { Button } from "../Button/Button";

// карточка семинара

export type CardType = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
};
export type CardPropsType = {
  data: CardType;
  color?: "blue" | "yellow";
};

export const Card: React.FC<CardPropsType> = ({ data, color }) => {
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
      <img src={data.photo} alt="баннер семинара" />
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
