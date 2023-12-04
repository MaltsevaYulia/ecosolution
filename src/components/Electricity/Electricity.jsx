import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import css from './Electricity.module.css';

const Electricity = () => {
  const [amount, setAmount] = useState(1134147814);

  useEffect(() => {
    const id = setInterval(() => {
      setAmount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const toFormat = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <section className={css.section}>
      <h2 className="title">
        Electricity we produced
        <br /> for all time
      </h2>
      <div className={css.wrapp}>
        <span className={css.number}>{ toFormat(amount)}</span>
        <span className={css.text}>kWh</span>
      </div>
    </section>
  );
};

export default Electricity;
