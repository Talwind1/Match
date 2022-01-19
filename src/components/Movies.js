import React from "react";

import Aladin from "../img/11zon_compressed/Aladin_1_11zon.jpg";
import BATB from "../img/11zon_compressed/BATB_2_11zon.jpg";
import Pocahontas from "../img/11zon_compressed/Pocahontas_3_11zon";
import TLK from "../img/11zon_compressed/TLK_4_11zon.jpg";
import TLM from "../img/11zon_compressed/TLM_5_11zon.jpg";

function Movies({ idx }) {
  const movies = [
    { title: "Beauty and the Beast", img: BATB },
    { title: "The Little Mermaid", img: TLM },
    { title: "The Lion King", img: TLK },
    { title: "Aladin", img: Aladin },
    { title: "Pocahontas", img: Pocahontas },
  ];

  const styles = {
    height: "50vh",
  };
  return (
    <div>
      <img src={movies[idx].img} alt="" style={styles}></img>
      <h1>{movies[idx].title}</h1>
    </div>
  );
}

export default Movies;
