import React from 'react';
import css from './Electricity.module.css';

const Electricity = () => {
  return (
    <section>
      <h2 className="title">Electricity we produced for all time</h2>
      <div className={css.wrapp}>
        <span className={css.number}>1.134.147.814</span>
        <span className={css.text}>kWh</span>
      </div>
    </section>
  );
};

export default Electricity;
