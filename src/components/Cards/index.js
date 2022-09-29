import Card from "../Card";
import { useEffect, useState } from "react";

const Cards = ({ timetable }) => {
  const [cardsList, setCardsList] = useState([]);
  console.log(timetable);
  const renderFullItems = timetable?.result?.sessions?.map(
    ({ items, movie }) => {
      return <Card title={movie.name_rus} times={items} />;
    }
  );
  return <div className="cards__wrapper">{renderFullItems}</div>;
};

export default Cards;
