import Card from "../Card";
import { getCards } from "../../services";
import { useEffect } from "react";
const Cards = ({ date }) => {
  const handleCompany = async () => {
    const response = await getCards(date);
  };
  useEffect(() => {
    handleCompany();
  }, []);

  return <div className="cards__wrapper"></div>;
};

export default Cards;
