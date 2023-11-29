import React from 'react';
import sprite from 'assets/sprite.svg';
import Hero1x360px from '../../assets/img/Hero1x360px.jpg';
import Hero2x360px from '../../assets/img/Hero2x360px.jpg';
import Hero1x768px from '../../assets/img/Hero1x768px.jpg';
import Hero2x768px from '../../assets/img/Hero2x768px.jpg';
import Hero1x1280px from '../../assets/img/Hero1x1280px.jpg';
import Hero2x1280px from '../../assets/img/Hero2x1280px.jpg';
import css from './RenewableEnergy.module.css';

const About = () => {
  return (
    <section className={css.section}>
      <div className={css.border}>
        <h2 className="title">RENEWABLE ENERGY For any task</h2>
        <div className="wrapper">
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <button className={css.learnMore}>
            <span className={css.btnText}>Learn more</span>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-arrow-right-green`} />
            </svg>
          </button>
        </div>
      </div>
      <address className={css.contacts}>
        <p className={css.text}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <p className={css.text}>office@ecosolution.com</p>
      </address>

      <picture>
        <source
          type="image/jpeg"
          srcSet={`${Hero1x360px} 480w, ${Hero1x768px} 768w, ${Hero1x1280px} 1280w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
        />
        <source
          type="image/jpeg"
          srcSet={`${Hero2x360px} 480w, ${Hero2x768px} 768w, ${Hero2x1280px} 1280w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
        />
        <img src={Hero1x1280px} alt="hero" />
      </picture>
    </section>
  );
};

export default About;
