import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "./Form.module.scss";
import { Button } from "../Button/Button";
import { CardType } from "../../../utils/types";
import { isValidURL } from "../../../utils/utils";
import { useAddSeminarMutation } from "../../../app/seminarApi";
import { AlertModal } from "../AlertModal/AlertModal";

let initialState = {
  title: "",
  description: "",
  date: "",
  time: "",
  photo: "",
};

const initialStateError = {
  title: "",
  description: "",
  date: "",
  time: "",
  photo: "",
};

export const Form: React.FC<{ onClose?: () => void; data?: CardType }> = ({
  onClose,
  data,
}) => {
  const [formData, setFormData] = useState<CardType>(initialState);
  const [formErrors, setFormErrors] = useState<CardType>(initialStateError);
  const [formVisible, setFormVisible] = useState<boolean>(true);
  const [alertVisible, setAlertVisible] = useState(false)
  const [addSeminar, { isSuccess ,isError}] = useAddSeminarMutation();

  useEffect(() => {
    if (isSuccess) {
      setFormVisible(!formVisible);
      setAlertVisible(!alertVisible)
    }
  }, [isSuccess]);
  useEffect(() => {
    if (data) {
      const dateString = data.date;
      const [day, month, year] = dateString.split(".");
      const formattedDate = `${year}-${month}-${day}`;
  
      setFormData({
        id: data.id,
        title: data.title,
        description: data.description,
        date: formattedDate,
        time: data.time,
        photo: data.photo,
      });
    } else {
      setFormData(initialState); // Сброс формы при добавлении нового элемента
    }
  }, [data]);
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
    const isFormValid = Object.values(formErrors).every((item) => item === "")
    if (isFormValid && isValueFormFull) {
      try{
        addSeminar(formData);
      }catch(error){
        console.error(error)
      }
      
    }else{
      throw new Error
    }
    {
      onClose &&
        setTimeout(() => {
          onClose();
          setFormData({ ...initialStateError });
        }, 2000);
    }

  };

  const handleEdit = () => {};
  const handleRemove = () => {};
  if(isError) return <h2>error</h2>
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
          {formErrors.photo && (
            <p className={styled.error}>{formErrors.photo}</p>
          )}
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
          {formErrors.title && (
            <p className={styled.error}>{formErrors.title}</p>
          )}
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
        {data ? (
          <div className={styled.btn_list}>
            <Button className={styled.edit} onClick={handleEdit} color="blue">
              Редактировать
            </Button>
            <Button
              className={styled.remove}
              onClick={handleRemove}
              color="red"
            >
              Удалить
            </Button>
          </div>
        ) : (
          <Button color="blue" type="submit" onClick={handleSubmit}>
            Добавить
          </Button>
        )}

        <p className={styled.validation_message}>
          "Все поля должны быть заполнены!"
        </p>
      </form>
      <AlertModal message="Семинад добавлен" isVisible={!alertVisible}/>
    </>
  );
};
