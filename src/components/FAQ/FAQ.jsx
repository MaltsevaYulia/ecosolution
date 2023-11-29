import React from 'react'
import { Accordion } from 'Accordion/Accordion';
import { faqList } from 'constants/faqList';
import css from "./FAQ.module.css"


const FAQ = () => {
  return (
    <section>
      <h2 className="title">Frequently Asked Questions</h2>
      <Accordion faqList={faqList} />
      <p className={css.text}>Didn't find the answer to your question? </p>
      <button className={css.btn} type="button">
        <span className={css.btnText}>Contact Us</span>
        <span className={css.round}></span>
      </button>
    </section>
  );
}

export default FAQ