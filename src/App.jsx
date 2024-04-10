import React from "react";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import { logOut, login, selectUser } from "./redux/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import Widges from "./components/Widges";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // User logged out
        dispatch(logOut());
      }
    });
  }, []);

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
            <Widges />
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
