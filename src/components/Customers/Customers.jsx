import React, { useEffect, useState } from 'react';
import { customers } from 'constants/customers';

import css from './Customers.module.css';

const Customers = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = async img => {
      try {
        const imageModule = await import(`../../assets/customers/${img}.png`);
        setImages(prevImages => [
          ...prevImages,
          { img, src: imageModule.default },
        ]);
      } catch (error) {
        console.error(`Error loading image: ${error}`);
      }
    };

    customers.forEach(({ img }) => {
      loadImage(img);
    });
  }, []);

  return (
    <section className={css.section} id="customers">
      <h2 className="title">our satisfied customers</h2>
      <ul className={css.list}>
        {customers.map(({ name, url, img, id }) => {
          const loadedImage = images?.find(loadedImg => loadedImg.img === img);
          return (
            <li key={id} className={css.item}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                <p className={css.brandName}>{name}</p>
                {loadedImage && images && (
                  <img src={loadedImage.src} alt={name} className={css.logo} />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Customers;
