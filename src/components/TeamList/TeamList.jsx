import React, { useState, useEffect } from 'react';
import css from './TeamList.module.css';

import { team } from 'constants/team';
import { useMediaQuery } from '@react-hook/media-query';

const TeamList = () => {
  const [images, setImages] = useState([]);
  
  const isScreenSmall = useMediaQuery('(max-width: 767px)');
  const isScreenMedium = useMediaQuery('(min-width: 768px)');
  const isScreenBig = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    const getScreenSize = () => {
      if (isScreenSmall) {
        return '320';
      }
      if (isScreenMedium) {
        return '768';
      }
      if (isScreenBig) {
        return '1280';
      }
    };

    const loadImage = async img => {
      try {
        const imageModule1x = await import(
          `../../assets/team/${img}${getScreenSize()}px1x.jpg`
        );

        const imageModule2x = await import(
          `../../assets/team/${img}${getScreenSize()}px1x.jpg`
        );
        setImages(prevImages => [
          ...prevImages,
          { img, src_1x: imageModule1x.default, src_2x: imageModule2x.default },
        ]);
      } catch (error) {
        console.error(`Error loading image: ${error}`);
      }
    };

    team.forEach(({ img }) => {
      loadImage(img);
    });
  }, [isScreenBig, isScreenMedium, isScreenSmall]);

  return (
    <>
      <ul className={css.team}>
        {team.map(({ id, name, position, img }) => {
          const loadedImage = images.find(loadedImg => loadedImg.img === img);

          return (
            <li className={css.item} key={id}>
              {loadedImage && (
                <img
                  alt={name}
                  srcSet={`${loadedImage.src_1x} 1x, ${loadedImage.src_1x} 2x`}
                  src={loadedImage.src_1x}
                  width={isScreenBig ? '274' : '148'}
                  height={isScreenBig ? '290' : '168'}
                />
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
    </>
  );
};

export default TeamList;
