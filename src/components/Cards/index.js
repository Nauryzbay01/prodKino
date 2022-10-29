import Card from "../Card";
import "../../styles/right-style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
const Cards = ({ timetable }) => {
  const sessions = timetable?.result.sessions;

  const renderItems = (first, last) => {
    return sessions?.slice(first, last).map(({ items, movie }) => {
      return (
        <SwiperSlide>
          <Card
            image={movie.posters.p1200x1730}
            key={movie.id}
            title={movie.name_rus}
            times={items}
          />
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="right">
      <h2 className="cards__header">Сегодня на экранах</h2>
      <div className="cards__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={7}
          autoplay={{ delay: 18000 }}
          slidesPerGroup={7}
        >
          {renderItems(0, 15)}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
