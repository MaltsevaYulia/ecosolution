import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const rootDiv = document.querySelector('#root');

const Modal = ({ children, close }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  return createPortal(
    <div className={css.overlay} onClick={close}>
      <div className={css.modal}>{children}</div>
    </div>,
    rootDiv
  );
};

export default Modal;
