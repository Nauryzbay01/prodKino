import "../../styles/left-table.css";
// import { getFormatData } from "../../utils";

function LeftTable({ date, timetable: { result } }) {
  // const formatData = getFormatData(result);

  return (
    <div className="left-table">
      <div className="left-table-header">
        <div className="header-session">БЛИЖАЙШИЕ СЕАНСЫ</div>
        <div className="header-date">ВРЕМЯ</div>
      </div>
      <div className="items"></div>
    </div>
  );
}

export default LeftTable;
