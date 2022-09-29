import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import LeftTable from "../../components/LeftTable";
import { getData } from "../../services";
import { getDate } from "../../utils";
import Spinner from "../../components/Spinner";

import "../../styles/main-page.css";

const MainPage = () => {
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getData(getDate);
    setLoading(false);
    setTimetable(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <div className="page__wrapper">
        <LeftTable timetable={timetable} />
        <Cards date={getDate} timetable={timetable} />
      </div>
    </div>
  );
};

export default MainPage;
