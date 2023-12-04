import React from 'react';
import { Accordion } from 'components/Accordion/Accordion';
import { faqList } from 'constants/faqList';
import css from './FAQ.module.css';
import ButtonRound from 'components/ButtonRound/ButtonRound';
import { handleScroll } from 'helpers/hendleScroll';

const FAQ = () => {
  return (
    <section className={css.section} id="faq">
      <div className={css.container}>
        <h2 className="title">Frequently Asked Questions</h2>
        <Accordion faqList={faqList} />
      </div>
      <div className={css.wrapper}>
        <p className={css.text}>Didn't find the answer to your question? </p>
        <ButtonRound
          text="Contact Us"
          type="button"
          onClick={() => handleScroll('contactUs')}
        />
      </div>
    </section>
  );
};

export default FAQ;
