import React from "react";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import { selectUser } from "./redux/UserSlice";
import { useSelector } from "react-redux";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      <div className="App">
        <Header />
        {!user ? (
          <Login />
        ) : (
          <div className="app_body">
            <SideBar />
            <Feed />
          </div>
        )}

        {/* App Body  */}

        {/* Feed  */}
        {/* Widgests  */}
      </div>
    </>
  );
}

export default App;
