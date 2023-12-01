import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import sprite from 'assets/sprite.svg';
import css from './BurgerMenu.module.css';
import { navBarTitle } from 'constants/Navbar';
import SocialIcons from 'components/SocialIcons/SocialIcons';

const BurgerMenu = props => {
  return (
    <div className={css.burgerConteiner}>
      <button className={css.btn}>
        <svg className={css.iconClose} width="20" height="20">
          <use href={`${sprite}#icon-close`} />
        </svg>
        <span className={css.btnText}>close</span>
      </button>
      <nav className={css.nav}>
        {navBarTitle.map(title => (
          <a href="#contactUs" className={css.link}>
            <span className={css.linkText}>{title}</span>
            <svg className={css.iconArrow} width="20" height="20">
              <use href={`${sprite}#icon-arrow-right-up`} />
            </svg>
          </a>
        ))}
      </nav>
      <SocialIcons />
    </div>
  );
  // return (
  //   // Pass on our props
  //   <Menu {...props}>
  //     <a className="menu-item" href="/">
  //       Home
  //     </a>

  //     <a className="menu-item" href="/about">
  //       About
  //     </a>

  //     <a className="menu-item" href="/services">
  //       Services
  //     </a>

  //     <a className="menu-item" href="/contact">
  //       Contact us
  //     </a>
  //   </Menu>
  // );
};

export default BurgerMenu;
