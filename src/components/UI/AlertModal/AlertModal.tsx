import React from 'react';
import styled from './AlertModal.module.scss'

export const AlertModal: React.FC<{message:string, className?:string}> = ({message, className}) => {
    const alertClass = `${className ? `${styled.alert_modal} ${className}`: styled.alert_modal}`
    return (
      <div className={alertClass}>
        <p>{message}</p>
      </div>
    );
  };
  