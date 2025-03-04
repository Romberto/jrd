import React from "react";
import styled from "./Form.module.scss";

export const Form: React.FC = () => {
  return (
    <>
    <form >
      <input
        className={styled.input}
        name="photo"
        type="text"
        placeholder="url картинки"
        required
      />
      <input
        className={styled.input}
        name="title"
        type="text"
        placeholder="url картинки"
        required
      />
      <input
        className={styled.input}
        name="description"
        type="text"
        placeholder="url картинки"
        required
      />
      <input
        className={styled.input}
        name="date"
        type="text"
        placeholder="url картинки"
        required
      />
      <input
        className={styled.input}
        name="time"
        type="text"
        placeholder="url картинки"
        required
      />
    </form>
    </>
    
  );
};
