import React, { useRef } from 'react';

import sprite from 'assets/sprite.svg';

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {!isOpen && (
          <svg width="16" height="16">
            <use href={`${sprite}#icon-add`} />
          </svg>
        )}
        {isOpen && (
          <svg width="16" height="16">
            <use href={`${sprite}#icon-minus`} />
          </svg>
              )}
              <span>{faqItem.q}</span>
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.a}
        </div>
      </div>
    </li>
  );
};
