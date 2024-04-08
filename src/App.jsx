import React from "react";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* App Body  */}
        <div className="app_body">
          <SideBar />
          <Feed />
        </div>
        {/* Feed  */}
        {/* Widgests  */}
      </div>
    </>
  );
}

export default App;
