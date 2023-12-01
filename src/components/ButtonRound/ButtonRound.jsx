import React from 'react';
import css from "./ButtonRound.module.css"

const ButtonRound = ({ text, ...props }) => {
  return (
    <button className={css.btn} {...props}>
          <span className={css.btnText}>{text}</span>
      <span className={css.round}></span>
    </button>
  );
};

export default ButtonRound;
