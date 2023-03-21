import React from "react";
import TuitsList from "../tuits/tuits-list.js";
import "./index.css";

const HomeComponent = () => {
  return(
    <div className="container">
      <h4>Home</h4>
      <ul className="list-group">
        <TuitsList/>
      </ul>
    </div>
  );
}
export default HomeComponent;