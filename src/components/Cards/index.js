import Card from "../Card";
import "../../styles/right-style.css";
import { useState, useEffect } from "react";

const Cards = ({ timetable }) => {

  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(7);
  const sessions = timetable?.result.sessions;

  useEffect(() => {
    if (sessions?.length <= 7) return;

    const interval = setInterval(() => {
      if (first === 0) {
        setFirst(7);
      }
      if (last === 7) {
        setLast(14);
      }
      if (first === 7) {
        setFirst(0);
      }
      if (last === 14) {
        setLast(7);
      }
    }, 17000);

    return () => {
      clearInterval(interval);
    };
  }, [sessions?.length, first, last]);

  const renderItems = (first, last) => {
    return sessions?.slice(first, last).map(({ items, movie }) => {
      return (
        <Card
          image={movie.posters.p1200x1730}
          key={movie.id}
          title={movie.name_rus}
          times={items}
        />
      );
    });
  };

  return (
    <div className="right">
      <h2 className="cards__header">Сегодня на экранах</h2>
      <div className="cards__wrapper">
        <div className="bg"></div>
        {renderItems(first, last)}
      </div>
    </div>
  );
};

export default Cards;
