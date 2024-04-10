import React from "react";
import "./SideBar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "../redux/UserSlice";
import { useSelector } from "react-redux";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://plus.unsplash.com/premium_photo-1674307878972-0014864b9ac5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewd you</p>
          <p className="sidebar_statNumber">2,534</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on posts</p>
          <p className="sidebar_statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar_button">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("DSA")}
        {recentItem("Backend")}
      </div>
    </div>
  );
}

export default SideBar;
