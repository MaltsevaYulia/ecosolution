import React from 'react';
import sprite from 'assets/sprite.svg';
import css from "./ButtonRound.module.css"


const ButtonRound = ({ text, ...props }) => {
  return (
    <button className={css.btn} {...props}>
      <span className={css.btnText}>{text}</span>
      <svg className={css.iconGoContact} width="16" height="16">
        <use href={`${sprite}#icon-go-contact`} />
      </svg>
    </button>
  );
};

export default ButtonRound;
