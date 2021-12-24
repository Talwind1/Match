import React, { Component } from "react";
import up from "../img/v.png";
import down from "../img/x.png";

function Button({ type, onHandleClick }) {
  // const imgURL = type === "up" ? up : down;

  // const styles = {
  //   backgroundImage: URL(imgURL),
  // };

  return (
    <div className={type}>
      <button onClick={onHandleClick}>{type}</button>
    </div>
  );
}
export default Button;
