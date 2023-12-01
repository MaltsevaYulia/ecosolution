import React from 'react'
import css from "./Logo.module.css"
import sprite from 'assets/sprite.svg';

const Logo = () => {
  return (
    <a className={css.link} href="./">
      <svg className="" width="31" height="18">
        <use id="logo" href={`${sprite}#icon-logo`} />
      </svg>
      <p className={css.logo}>ecosolution</p>
      <p className={css.LogoP}>
        <span className={css.logoGreen}>GREEN</span>
        <span>ERGY FOR LIFE</span>
      </p>
    </a>
  );
}

export default Logo