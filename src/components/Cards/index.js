import Card from "../Card";
import { useEffect, useState } from "react";
import "../../styles/right-style.css";
const Cards = ({ timetable }) => {
  const [cardsList, setCardsList] = useState([]);
  const renderFullItems = timetable?.result?.sessions
    ?.slice(0, 18)
    .map(({ items, movie }) => {
      return (
        <Card
          image={movie.posters.p1200x1730}
          key={movie.id}
          title={movie.name_rus}
          times={items}
        />
      );
    });
  return (
    <div className="right">
      <h2 className="cards__header">Сегодня на экранах</h2>
      <div className="cards__wrapper">{renderFullItems}</div>
    </div>
  );
};

export default Cards;
