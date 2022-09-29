const Card = ({ title, times }) => {
  const renderTimes = times?.map(({ session }) => {
    return <div className="card__time">{session?.session_date_tz}</div>;
  });
  return (
    <div className="card">
      <div className="card__pic">
        <img src="" />
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__times">{renderTimes}</div>
    </div>
  );
};

export default Card;
