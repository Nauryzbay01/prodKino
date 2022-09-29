import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import LeftTable from "../../components/LeftTable";
import { getCards } from "../../services";
import "../../styles/main-page.css";
const MainPage = ({ date }) => {
  const [timetable, setTimetable] = useState([]);

  const fetchData = async () => {
    const data = await getCards(date);
    setTimetable(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="page__wrapper">
        <LeftTable date={date} timetable={timetable} />
        <Cards date={date} timetable={timetable} />
      </div>
    </div>
  );
};

export default MainPage;
