import React from 'react'
import { Accordion } from 'components/Accordion/Accordion';
import { faqList } from 'constants/faqList';
import css from "./FAQ.module.css"
import ButtonRound from 'components/ButtonRound/ButtonRound';


const FAQ = () => {
  return (
    <section className={css.section} id="faq">
      <h2 className="title">Frequently Asked Questions</h2>
      <Accordion faqList={faqList} />
      <p className={css.text}>Didn't find the answer to your question? </p>
      <ButtonRound text="Contact Us" type="button" />
    </section>
  );
}

export default FAQ