import React from "react";
import styled from "./Button.module.scss";

export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
  color?: "red" | "blue";
};

export const Button: React.FC<ButtonType> = ({
  className = "",
  color,
  children,
  ...rest
}) => {
  let btnClass = `${styled.btn} ${className}`;
  if (color) {
    if (color === "red") {
      btnClass += ` ${styled.red}`;
    } else if (color === "blue") {
      btnClass += ` ${styled.blue}`;
    }
  }
  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  );
};
