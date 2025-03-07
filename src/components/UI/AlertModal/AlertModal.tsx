import React from "react";
import styled from "./AlertModal.module.scss";

export const AlertModal: React.FC<{
  message: string;
  isVisible: boolean;
  mode: "success" | "error" | "init";
}> = ({ message, isVisible, mode = "init" }) => {
  return (
    <div
      className={
        isVisible
          ? `${styled.alert_modal}`
          : `${styled.alert_modal} ${styled.isshow}`
      }
      data-js-allert
    >
      <p className={`${mode === "error" ? styled.red : styled.green}`}>
        {message}
      </p>
    </div>
  );
};
