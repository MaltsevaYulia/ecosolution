import React, { useRef, useState } from 'react';
import CasesNav from 'components/CasesElements/CasesNav/CasesNav';
import CasesPagination from 'components/CasesElements/CasesPagination/CasesPagination';
import CasesSlider from 'components/CasesElements/CasesSlider/CasesSlider';

import css from './Cases.module.css';

import { cases } from 'constants/cases';

const Cases = () => {
  const reviewsSwiperRef = useRef(null);
  const [isSlideIndex, setSlideIndex] = useState(1);

  const handleSlideChange = () => {
    if (reviewsSwiperRef && reviewsSwiperRef.current) {
      setSlideIndex(reviewsSwiperRef.current.swiper.realIndex + 1);
    }
  };

  const handlePrev = () => reviewsSwiperRef.current.swiper.slidePrev();
  const handleNext = () => reviewsSwiperRef.current.swiper.slideNext();

  return (
    <section id="cases" className={css.section}>
      <div className={css.container}>
        <h2 className="title">Successful cases of our company</h2>
        <div className={css.navBar}>
          <CasesPagination count={isSlideIndex} all={cases.length} />
          <CasesNav left={handlePrev} right={handleNext} />
        </div>
      </div>
      <div className={css.casesSliderWraper}>
        <CasesSlider
          onSlideChange={handleSlideChange}
          items={cases}
          refference={reviewsSwiperRef}
        />
      </div>
    </section>
  );
};

export default Cases;
