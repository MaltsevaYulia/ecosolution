import React from 'react';
import sprite from 'assets/sprite.svg';
import css from './BurgerMenu.module.css';
import { navBarTitle } from 'constants/Navbar';
import SocialIcons from 'components/SocialIcons/SocialIcons';

const BurgerMenu = ({ closeBurgerMenu }) => {
  return (
    <div className={css.burgerConteiner}>
      <div>
        <button
          className={css.btn}
          type="button"
          onClick={closeBurgerMenu}
        >
          <svg className={css.iconClose} width="20" height="20">
            <use href={`${sprite}#icon-close`} />
          </svg>
          <span className={css.btnText}>close</span>
        </button>
        <nav className={css.nav}>
          {navBarTitle.map(({ title, id }) => (
            <a href={`#${id}`} className={css.link} key={id}>
              <span className={css.linkText}>{title}</span>
              <svg className={css.iconArrow} width="20" height="20">
                <use href={`${sprite}#icon-arrow-right-up`} />
              </svg>
            </a>
          ))}
        </nav>
      </div>
      <SocialIcons />
    </div>
  );
};

export default BurgerMenu;
