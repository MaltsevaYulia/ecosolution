import React from 'react';
import Hero1x360px from '../../assets/img/Hero1x360px.jpg';
import Hero2x360px from '../../assets/img/Hero2x360px.jpg';
import Hero1x768px from '../../assets/img/Hero1x768px.jpg';
import Hero2x768px from '../../assets/img/Hero2x768px.jpg';
import Hero1x1280px from '../../assets/img/Hero1x1280px.jpg';
import Hero2x1280px from '../../assets/img/Hero2x1280px.jpg';
import css from './Main.module.css';
import ButtonArrow from 'components/ButtonArrow/ButtonArrow';

const Main = () => {
  return (
    <section className={css.section} id="main">
      <div className={css.border}>
        <h2 className="title">RENEWABLE ENERGY For any task</h2>
        <div className={css.wrapper}>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <ButtonArrow text="Learn more" type="button" />
        </div>
      </div>
      <address className={css.contacts}>
        <a
          href="https://www.google.com/maps/d/u/0/viewer?mid=10uSM3H-mIU3GznYo2szRIEphczw&hl=en_US&ll=49.83104779596067%2C24.03532398042603&z=17"
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a href="mailto:office@ecosolution.com" className={css.link}>
          office@ecosolution.com
        </a>

        <p className={css.link}>
          ecosolution &copy; {new Date().getFullYear()}
        </p>
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

export default Main;
