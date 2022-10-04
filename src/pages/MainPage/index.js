import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
// import LeftTable from "../../components/LeftTable";
import { getData } from "../../services";
import { date } from "../../utils";
import Spinner from "../../components/Spinner";

import "../../styles/main-page.css";

const MainPage = () => {
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getData(date);
      console.log(data);
      setLoading(false);
      setTimetable(data);
    };

    const interval = setInterval(() => {
      fetchData();
    }, 300000);

    fetchData();

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <div className="page__wrapper">
        {/* <LeftTable timetable={timetable} /> */}
        <Cards date={date} timetable={timetable} />
      </div>
    </div>
  );
};

export default MainPage;
