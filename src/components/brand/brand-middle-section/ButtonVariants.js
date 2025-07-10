import React from "react";
import "./style.css";
const ButtonVariants = (props) => {
  const { color, text, varient } = props;
  return (
    <div className="btnGroupData">
        <button className={`cta-button ${varient}`}>
          <span class="circle"></span>
          {text}
          <span class="circle"></span>
        </button>
    </div>
  );
};

export default ButtonVariants;
