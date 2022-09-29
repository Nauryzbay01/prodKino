import React from "react";
import MainPage from "./pages/MainPage";
import date from "./utils";

function App() {
  return (
    <div className="App">
      <MainPage date={date} />
    </div>
  );
}

export default App;
