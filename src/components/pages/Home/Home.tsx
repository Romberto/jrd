import React from 'react';
import styled from './Home.module.scss'
import { Card } from '../../UI/Card/Card';

export const Home: React.FC = () => {

  const data = {
    "id": 10,
    "title": "Будущее косметологии с Kosmoteros",
    "description": "Обсуждение перспектив развития косметологии и роли инноваций.",
    "date": "19.02.2025",
    "time": "19:00",
    "photo": "https://avatars.mds.yandex.net/i?id=debc3beed12e6e30d7c1ff43b9629dc5229a0aea-5301046-images-thumbs&n=13"
  }
  return (

      <Card data={data}/>

  );
};
