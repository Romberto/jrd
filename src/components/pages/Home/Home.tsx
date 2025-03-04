import React from "react";
import styled from "./Home.module.scss";
import { Card } from "../../UI/Card/Card";
import { useGetSeminarsQuery } from "../../../app/seminarApi";
import { CardType } from "../../../utils/types";

export const Home: React.FC = () => {
  const { data, isError, isLoading } = useGetSeminarsQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error...</p>;
  return (
    <ul className={styled.seminars}>
      {data &&
        data.map((item) => (
          <li key={item.id}>
            <Card data={item} />
          </li>
        ))}
    </ul>
  );
};
