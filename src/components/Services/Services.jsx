import { services } from 'constants/services';
import React from 'react';
import css from './Services.module.css';

const Services = () => {
  return (
    <section id="service" className={css.section}>
      <h2 className="title">
        The services
        <br /> we provide
      </h2>
      <div className={css.wrapper}>
        <p className={css.text}>
          Development and implementation of renewable enviroMentally friendly
          energy sources
        </p>
        <ul className={css.list}>
          {services.map(item => (
            <li key={item} className={css.item}>
              <p className={css.itemText}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
