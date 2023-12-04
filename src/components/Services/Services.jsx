import { services } from 'constants/services';
import React from 'react';
import { useState } from 'react';
import sprite from 'assets/sprite.svg';
import css from './Services.module.css';
import img1x from 'assets/servises/img1x.jpg';
import img2x from 'assets/servises/img1x.jpg';
import { useMediaQuery } from '@react-hook/media-query';

const Services = () => {
  const isScreenBig = useMediaQuery('(min-width: 1280px)');
  const [activItem, setActivItem] = useState('');


  return (
    <section id="service" className={css.section}>
      <h2 className="title">
        The services
        <br /> we provide
      </h2>

      <div className={css.wrapper}>
        {!isScreenBig && (
          <p className={css.text}>
            Development and implementation of renewable enviroMentally friendly
            energy sources
          </p>
        )}
        {!activItem && isScreenBig && (
          <p className={css.text}>
            Development and implementation of renewable enviroMentally friendly
            energy sources
          </p>
        )}
        {activItem && isScreenBig && (
          <div className={css.box}>
            <div className={css.boxTitleWrapper}>
              <p className={css.boxTitle}>{activItem} Energy</p>
              <button className={css.boxBtn}>
                <svg className={css.iconArrow} width="60" height="60">
                  <use href={`${sprite}#icon-arrow-right-green`} />
                </svg>
              </button>
            </div>
            <img
              className={css.boxImg}
              alt=""
              srcSet={`${img1x} 1x, ${img2x} 2x`}
              src={img1x}
              width="348"
              height="348"
            />
            <p className={css.readMore}>Read more about {activItem} Energy</p>
            {/* <a href="#">Read more about Wind Energy</a> */}
          </div>
        )}
        <div className={css.listWrapper}>
          <ul className={css.list}>
            {services.map(item => (
              <li
                key={item}
                className={css.item}
               
                onClick={() =>
                  item === activItem ? setActivItem('') : setActivItem(item)
                }
              >
                <p className={css.itemText}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
