import Cards from "../../components/Cards";
import LeftTable from "../../components/LeftTable";
import "../../styles/main-page.css";
import { getCards } from "../../services";
import { useEffect, useState } from "react";
const MainPage = ({ date }) => {
  const [cardsList, setCardsList] = useState([]);
  useEffect(() => {
    const handleCompany = async () => {
      const response = await getCards(date);
      setCardsList(response);
    };
    handleCompany();
  }, []);
  return (
    <div className="container">
      <div className="page__wrapper">
        <LeftTable date={date} cards={cardsList} />
        <Cards date={date} cards={cardsList} />
      </div>
    </div>
  );
};

export default MainPage;
