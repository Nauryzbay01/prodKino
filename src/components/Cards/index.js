import Card from "../Card";
import { useEffect, useState } from "react";
import "../../styles/right-style.css";
const Cards = ({ timetable }) => {
  const [cardsList, setCardsList] = useState([]);
  console.log(timetable);
  const renderFullItems = timetable?.result?.sessions?.map(
    ({ items, movie }) => {
      return (
        <Card
          image={movie.posters.p1200x1730}
          key={movie.id}
          title={movie.name_rus}
          times={items}
        />
      );
    }
  );
  return <div className="cards__wrapper">{renderFullItems}</div>;
};

export default Cards;
