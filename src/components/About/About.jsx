import React from 'react';
import css from "./About.module.css"

const About = () => {
  return (
    <section className={css.section} id="about">
      <div className={css.container}>
        <h2 className="title">
          LET’s start with small
          <br /> start with ourselves
        </h2>
        <article className={css.article}>
          <span>ECOSOLUTION </span>
          <span>
            is the largest group of companies in Western Ukraine, which is
            engaged in the development and implementation of renewable
            environmentally friendly energy sources. We are the first privately
            owned company that received a loan from the European Bank for
            Reconstruction and Development (EBRD) and built the first wind farm
            in Western Ukraine. During the company's work, a number of projects
            in the field of energy were implemented. At the same time, new
            investment projects, in particular small hydropower and biofuels,
            are constantly being developed and developed with existing objects.
          </span>
        </article>
      </div>
     
    </section>
  );
};

export default About;
