import React from 'react'
import sprite from 'assets/sprite.svg';
import css from "./ButtonArrow.module.css"

const ButtonArrow = ({text, ...props}) => {
  return (
    <button className={css.btn} {...props}>
          <span className={css.btnText}>{text}</span>
      <svg className={css.icon}>
        <use href={`${sprite}#icon-arrow-right-green`} />
      </svg>
    </button>
  );
}

export default ButtonArrow