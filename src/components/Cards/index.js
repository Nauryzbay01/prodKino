import Card from "../Card";
import "../../styles/right-style.css";
const Cards = ({ timetable }) => {
  const renderFullItems = timetable?.result?.sessions
    ?.slice(0, 7)
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
      <div className="cards__wrapper">
        <div className="bg"></div>
        {renderFullItems}
      </div>
    </div>
  );
};

export default Cards;
