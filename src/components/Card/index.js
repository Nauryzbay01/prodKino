import { sliceTime } from "../../utils";
const Card = ({ title, times, image }) => {
  const renderTimes = times?.slice(0, 12).map(({ session }) => {
    return (
      <div key={session.id} className="card__time">
        {sliceTime(session?.session_date_tz)}
      </div>
    );
  });
  return (
    <div className="card">
      <div className="card__pic">
        <img src={image} alt="card" />
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__times">{renderTimes}</div>
    </div>
  );
};

export default Card;
