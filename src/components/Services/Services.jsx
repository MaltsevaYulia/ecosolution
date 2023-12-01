import React from 'react'

const text = ['Solar', 'Wind', 'Hydro', 'Thermal', 'Nuclear'];

const Services = () => {
  return (
    <section id="service">
      <h2 className="title">The services we provide</h2>
      <h3 className="title">
        Development and implementation of renewable enviroMentally friendly
        energy sources
      </h3>
      <ul>
        {text.map(item => (
          <li>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services