import React ,{ useState, useEffect } from 'react';
import css from './TeamList.module.css';

import { team } from 'constants/team';
const TeamList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = async img => {
      try {
        const imageModule = await import(`../../assets/team/${img}320px1x.jpg`);
        setImages(prevImages => [
          ...prevImages,
          { img, src: imageModule.default },
        ]);
      } catch (error) {
        console.error(`Error loading image: ${error}`);
      }
    };

    team.forEach(({ img }) => {
      loadImage(img);
    });
  }, []);

  return (
    <ul className={css.team}>
      {team.map(({ id, name, position, img }) => {
        const loadedImage = images.find(loadedImg => loadedImg.img === img);

        return (
          <li className={css.item} key={id}>
            {loadedImage && (
              <picture>
                <source
                  type="image/jpeg"
                  srcSet={`${loadedImage.src} 480w, ${loadedImage.src} 768w, ${loadedImage.src} 1280w`}
                  sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${loadedImage.src} 480w, ${loadedImage.src} 768w, ${loadedImage.src} 1280w`}
                  sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
                />
                <img src={loadedImage.src} alt={name} />
              </picture>
            )}

            <div className={css.card}>
              <h3 className={css.title}>{name}</h3>
              <p lang="en" className={css.text}>
                {position}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TeamList;

