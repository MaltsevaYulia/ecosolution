import React from 'react';
import Logo from 'components/Logo/Logo';
import { useMediaQuery } from '@react-hook/media-query';
import sprite from 'assets/sprite.svg';
import css from './Header.module.css';
import { useState } from 'react';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Modal from 'components/Modal/Modal';
import { handleScroll } from 'helpers/hendleScroll';
import ButtonRound from 'components/ButtonRound/ButtonRound';

const Header = () => {
  const [isChangeColor, setIsChangeColor] = useState(false);
  const isScreenMedium = useMediaQuery('(min-width: 768px)');
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsBurgerOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsBurgerOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setIsChangeColor(true);
    } else {
      setIsChangeColor(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header
      id="header"
      className={isChangeColor ? `${css.header} ${css.active}` : css.header}
    >
      <Logo />
      <div className={css.container}>
        <button type="button" className={css.btn} onClick={openBurgerMenu}>
          <svg className={css.iconMenu} width="16" height="16">
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </button>

        {isScreenMedium && (
          <ButtonRound
            text="Get in touch"
            type="button"
            onClick={() => handleScroll('contactUs')}
          />
        )}
      </div>
      {isBurgerOpen && (
        <Modal close={closeBurgerMenu}>
          <BurgerMenu closeBurgerMenu={closeBurgerMenu} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
