import React from 'react';
import { customers } from 'constants/customers';

import css from './Customers.module.css';

const Customers = () => {
 

  return (
    <section className={css.section} id="customers">
      <h2 className="title">our satisfied customers</h2>
      <ul className={css.list}>
        {customers.map(({ name, url, img, id }) => {
        
          return (
            <li key={id} className={css.item}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
                aria-label={`go to ${name} web site`}
              >
                <p className={css.brandName}>{name}</p>
                <img src={img} alt={name} className={css.logo} />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Customers;
