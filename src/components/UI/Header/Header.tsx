import React from 'react';
import styled from './Header.module.scss'
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Header: React.FC = () => {
  return (
    <header className={styled.header}>
        <Link to="/" className={styled.logo}>
        Seminars
        </Link>
        <Button className={styled.btn} color='blue'>
            Add seminar
        </Button>
    </header>
  );
};
