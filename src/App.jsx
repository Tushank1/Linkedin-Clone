import React from "react";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* App Body  */}
        <div className="app_body">
          <SideBar />
        </div>
        {/* Feed  */}
        {/* Widgests  */}
      </div>
    </>
  );
}

export default App;
