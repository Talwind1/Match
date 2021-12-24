import React, { Component } from "react";

import Aladin from "../img/Aladin.jpg";
import BATB from "../img/BATB.jpg";
import Pocahontas from "../img/Pocahontas.jpg";
import TLK from "../img/TLK.jpg";
import TLM from "../img/TLM.jpg";

function Movies({ idx }) {
  const movies = [
    { title: "Beauty and the Beast", img: BATB },
    { title: "The Little Mermaid", img: TLM },
    { title: "The Lion King", img: TLK },
    { title: "Aladin", img: Aladin },
    { title: "Pocahontas", img: Pocahontas },
  ];

  const styles = {
    height: "70vh",
  };
  return (
    <div>
      <img src={movies[idx].img} alt="" style={styles}></img>
      <h1>{movies[idx].title}</h1>
    </div>
  );
}

export default Movies;
