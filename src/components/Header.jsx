import React from "react";
import "./Header.css";
import "./HeaderOption";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/UserSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logOut());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s"
          alt="pic"
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
