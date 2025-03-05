import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "./Form.module.scss";
import { Button } from "../Button/Button";
import { CardType } from "../../../utils/types";
import { isValidURL } from "../../../utils/utils";
import { useAddSeminarMutation } from "../../../app/seminarApi";
import { AlertModal } from "../AlertModal/AlertModal";

const initialState = {
  title: "",
  description: "",
  date: "",
  time: "",
  photo: "",
};
const initialStateError = {
  ...initialState,
  photo: "",
};

export const Form: React.FC<{onClose?:()=>void}> = ({onClose}) => {
  const [formData, setFormData] = useState<CardType>(initialState);
  const [formErrors, setFormErrors] = useState<CardType>(initialStateError);
  const [formVisible, setFormVisible] = useState<boolean>(true);
  const [addSeminar, {isSuccess, isError}] = useAddSeminarMutation();

  useEffect(() => {
    if (isSuccess) {
      setFormVisible(false)
    }
  }, [isSuccess, isError]); 
   
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // валидация ссылки
    if (!isValidURL(value) && name === "photo") {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "не корректная ссылка",
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let isValueFormFull = true; // переменная все поля заполнены
    for (const [key, value] of Object.entries(formData)) {
      // смотрим есть ли пустые поля в форме
      if (value === "") {
        setFormErrors((prev) => ({
          ...prev,
          [key]: "обязательное поле",
        }));
        isValueFormFull = false;
      }
    }
    // Проверка на остальные ошибки заполненя полей формы
    const isFormValid = Object.values(formErrors).every((item) => item === "");
    if (isFormValid && isValueFormFull) {
      addSeminar(formData);
    }

    {onClose && setTimeout(()=>{onClose()}, 2000)}
  };

  return (
    <>
    <form
      className={`${
        formVisible ? styled.form : `${styled.form} ${styled.form_hide}`
      }`}
    >
      <h2>Добавте семинар</h2>
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
        Добавить
      </Button>
      <p className={styled.validation_message}>
        "Все поля должны быть заполнены!"
      </p>
    </form>
     <AlertModal message="семинар добавлен" className={`${!formVisible && styled.alert_modal_visible}`}/>
    </>
    
  );
};





