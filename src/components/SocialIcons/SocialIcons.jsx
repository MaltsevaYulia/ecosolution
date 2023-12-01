import React from 'react'
import sprite from 'assets/sprite.svg';
import css from "./SocialIcons.module.css"

const SocialIcons = () => {
  return (
    <div className={css.social}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
       
      >
        <svg width="24" height="24" className={css.icon}>
          <use href={`${sprite}#icon-facebook`} width="24" height="24" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
       
      >
        <svg width="24" height="24" className={css.icon}>
          <use href={`${sprite}#icon-instagram`} />
        </svg>
      </a>
    </div>
  );
}

export default SocialIcons