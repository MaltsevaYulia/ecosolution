import sprite from 'assets/sprite.svg';
import css from './CasesNav.module.css';

const CasesNav = ({ left, right }) => {
  return (
    <div className={css.buttonWrap}>
      <button
        onClick={left}
        className={css.buttonWrapR}
        arial-label="go to previos slide"
      >
        <svg className={css.iconArrow} width="36" height="36">
          <use href={`${sprite}#icon-arrow-right-up`} />
        </svg>
      </button>
      <button onClick={right} arial-label="go to next slide">
        <svg className={css.iconArrow} width="36" height="36">
          <use href={`${sprite}#icon-arrow-right-up`} />
        </svg>
      </button>
    </div>
  );
};

export default CasesNav;
