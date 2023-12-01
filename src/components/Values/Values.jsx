import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { values } from 'constants/values';
import sprite from 'assets/sprite.svg';
import css from './Values.module.css';

const Values = () => {
  const isScreenBig = useMediaQuery('(min-width: 768px)');

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className="title">Main values of our company</h2>
        <p className={css.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>
      <ul className={css.list}>
        {values.map(({ title, descroption, iconName }) => (
          <li key={title} className={css.item}>
            <div className={css.titleWrapp}>
              <svg className={css.valueIcon} width="16" height="16">
                <use href={`${sprite}#${iconName}`} />
              </svg>
              <h4 className={css.valueTitle}>{title}</h4>{' '}
            </div>
            <p className={css.descroption}>{descroption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Values;
