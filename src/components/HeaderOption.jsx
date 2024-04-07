import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {/* if i can pass Icon only then Icon component can be used */}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
