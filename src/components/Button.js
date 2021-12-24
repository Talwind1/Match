import React from "react";

function Button({ type, onHandleClick }) {
  const icon = type === "up" ? "👍" : "👎";

  return (
    <button onClick={onHandleClick} className="Button">
      {type} {icon}
    </button>
  );
}
export default Button;
