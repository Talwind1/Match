import React from "react";

function Likes({ type, counter }) {
  const icon = type === "like" ? "😍" : "😫";

  return (
    <div>
      <h2>{icon}</h2>
      <h2>{counter}</h2>
    </div>
  );
}
export default Likes;
