import React from "react";
import styled from "./AlertModal.module.scss";

export const AlertModal: React.FC<{ message: string; isVisible: boolean }> = ({
  message,
  isVisible,
}) => {
  return (
    <div
      className={
        isVisible
          ? `${styled.alert_modal}`
          : `${styled.alert_modal} ${styled.isshow}`
      }
      data-js-allert
    >
      <p>{message}</p>
    </div>
  );
};
