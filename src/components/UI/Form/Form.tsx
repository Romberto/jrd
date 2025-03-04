import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "./Form.module.scss";
import { Button } from "../Button/Button";
import { CardType } from "../../../utils/types";
import { isValidURL } from "../../../utils/utils";

const initialState = {
  title: "",
  description: "",
  date: "",
  time: "",
  photo: "",
};
const initialStateError = {
  ...initialState,
  photo: " ",
};

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<CardType>(initialState);
  const [formErrors, setFormErrors] = useState<CardType>(initialStateError);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors(initialState);
    if (
      !value &&
      (name === "photo" || name === "title" || name === "description")
    ) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "обязательное поле",
      }));
    }
    if (!isValidURL(value) && name === "photo") {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "не корректная ссылка",
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = Object.values(formErrors).every((item) => item === "");
    console.log(isValid);
  };
  return (
    <form className={styled.form}>
      <h2>Редактирование</h2>
      <label>
        <input
          className={styled.input}
          placeholder="URL картинки"
          name="photo"
          type="text"
          required
          value={formData.photo}
          onChange={handleChange}
        />
        {formErrors.photo && <p className={styled.error}>{formErrors.photo}</p>}
      </label>

      <label>
        <input
          className={styled.input}
          placeholder="Загаловок"
          name="title"
          type="text"
          required
          value={formData.title}
          onChange={handleChange}
        />
        {formErrors.title && <p className={styled.error}>{formErrors.title}</p>}
      </label>
      <label>
        <textarea
          placeholder="Описание"
          className={styled.input}
          name="description"
          rows={4}
          required
          value={formData.description}
          onChange={handleChange}
        />
        {formErrors.description && (
          <p className={styled.error}> {formErrors.description}</p>
        )}
      </label>
      <label>
        <p className={styled.label_title}>Дата</p>
        <input
          className={styled.input}
          name="date"
          type="date"
          required
          value={formData.date}
          onChange={handleChange}
        />
        {formErrors.date && <p className={styled.error}>{formErrors.date}</p>}
      </label>
      <label>
        <p className={styled.label_title}>Время</p>
        <input
          className={styled.input}
          name="time"
          type="time"
          required
          value={formData.time}
          onChange={handleChange}
        />
        {formErrors.time && <p className={styled.error}>{formErrors.time}</p>}
      </label>
      <Button color="blue" type="submit" onClick={handleSubmit}>
        Редактировать
      </Button>
    </form>
  );
};
