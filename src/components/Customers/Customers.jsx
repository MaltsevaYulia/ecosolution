import React from 'react'
import css from './Customers.module.css'

const Customers = () => {
  return (
    <section className={css.section} id="customers">
      <h2 className="title">our satisfied customers</h2>
      <ul>
        <li>
          <p>Bosch</p>
          {/* <img/> */}
        </li>
        <li>
          <p>Zakhidnyi Buh</p>
          {/* <img/> */}
        </li>
      </ul>
    </section>
  );
}

export default Customers