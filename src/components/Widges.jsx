import React from "react";
import "./Widges.css";
import Info from "@mui/icons-material/Info";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
function Widges() {
  const newsArticle = (heading, subtitle) => (
    <div className="widges_articles">
      <div className="widges_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widges_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widges">
      <div className="widges_header">
        <h2>Linked News</h2>
        <Info />
      </div>
      {newsArticle(
        "Latest technology about AI & Robotics",
        "Come only in 3-4 well developed Countries"
      )}
      {newsArticle("News about Recession", "Recession is at Global level")}
      {newsArticle(
        "Indian Job Market",
        "Down as always not a good sign for future/present."
      )}
      {newsArticle(
        "Remote Rises Globally",
        "Demand and supply of remotes jobs is increasing day by day"
      )}
      {newsArticle("Top Tech career", "AI, Robotics, ML, DS, DA")}
      {newsArticle("Popular Coding Language", "Python,C++,Java,JavaScript")}
    </div>
  );
}

export default Widges;
