import Cards from "../../components/Cards";
import LeftTable from "../../components/LeftTable";
import "../../styles/main-page.css";

const MainPage = ({ date }) => {
  return (
    <div className="container">
      <div className="page__wrapper">
        <LeftTable date={date} />
        <Cards date={date} />
      </div>
    </div>
  );
};

export default MainPage;
