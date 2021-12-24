import React, { Component } from "react";
import like from "../img/like.png";
import dislike from "../img/dislike.png";

function Likes({ type, counter }) {
  //  const imgType = type === "like" ? like : dislike;
  return (
    <div>
      {/* <img src={imgType} style={width:}/> */}
      <h2>{type}</h2>
      <h2>{counter}</h2>
    </div>
  );
}
export default Likes;
