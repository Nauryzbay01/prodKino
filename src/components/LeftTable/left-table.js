import { getCards } from "../../services";
import "../../styles/left-table.css";

function LeftTable({ date }) {
  return <div className="left-table">{date}</div>;
}

export default LeftTable;
