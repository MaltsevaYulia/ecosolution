import React from 'react';
import sprite from 'assets/sprite.svg';
import css from './CasesSlide.module.css';

const CasesSlide = ({ item }) => {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img
          className={css.slideImg}
          alt={item.text}
          srcSet={`${item.img.img1x} 1x, ${item.img.img2x} 2x`}
          src={item.img.img1x}
        />
      </div>
      <div className={css.infoWraper}>
        <div className={css.titleWraper}>
          <h3 className={css.infoTitle}>{item.title}</h3>
          <button className={css.btn}>
            {/* <svg className={css.iconArrow} width="60" height="60">
              <use href={`${sprite}#icon-arrow-right-green`} />
            </svg> */}
            <svg className={css.iconArrow} width="28" height="28">
              <use href={`${sprite}#icon-arrow-up`} />
            </svg>
          </button>
        </div>
        <div className={css.textWrapper}>
          <p className={css.text}>{item.text}</p>
          <p className={css.text}>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CasesSlide;
