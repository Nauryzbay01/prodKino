import Card from "../Card";
import "../../styles/right-style.css";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Cards = ({ timetable }) => {
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(7);
  const [animation, setAnimation] = useState(false);
  const sessions = timetable?.result.sessions;
  // useEffect(() => {
  //   if (sessions?.length <= 7) return;

  //   const interval = setInterval(() => {
  //     setAnimation(true);
  //     setInterval(() => {
  //       setAnimation(false);
  //     }, 750);

  //     if (first === 0) {
  //       setFirst(sessions?.length - 7);
  //     }
  //     if (last === 7) {
  //       setLast(14);
  //     }
  //     if (first === sessions?.length - 7) {
  //       setFirst(0);
  //     }
  //     if (last === 14) {
  //       setLast(7);
  //     }
  //   }, 18000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [sessions?.length, first, last]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 18000,
  };
  const renderItems = (first, last) => {
    return sessions?.slice(first, last).map(({ items, movie }) => {
      return (
        <div>
          <Card
            image={movie.posters.p1200x1730}
            key={movie.id}
            title={movie.name_rus}
            times={items}
          />
        </div>
      );
    });
  };

  return (
    <div className="right">
      <h2 className="cards__header">Сегодня на экранах</h2>
      <div className="cards__wrapper">
        {/* {animation ? <Spinner /> : renderItems(first, last)} */}
        <Slider {...settings}>{renderItems(0, 15)}</Slider>
      </div>
    </div>
  );
};

export default Cards;
