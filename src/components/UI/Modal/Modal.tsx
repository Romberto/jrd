import React from 'react';
import styled from './Modal.module.scss'

type Modal = {
    onClose: ()=>void;
}

export const Modal: React.FC<Modal> = ({onClose}) => {
    const closeModal = () => {
        onClose()
    }
  return (
    <div className={styled.modal}>
            <div className={styled.wrapper}>
              <div className={styled.background}></div>
              <button onClick={closeModal} className={styled.close}>
                Close
              </button>
              <form>
                <input className={styled.input} name='photo' type="text"  placeholder='url картинки' required/>
                <input className={styled.input} name='title' type="text"  placeholder='url картинки' required/>
                <input className={styled.input} name='description' type="text"  placeholder='url картинки' required/>
                <input className={styled.input} name='date' type="text"  placeholder='url картинки' required/>
                <input className={styled.input} name='time' type="text"  placeholder='url картинки' required/>
              </form>

            </div>
          </div>
  );
};
