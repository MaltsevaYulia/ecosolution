import React from 'react';
import sprite from 'assets/sprite.svg';
import css from './ContactUs.module.css';
import ContactUsForm from 'components/ContactUsForm/ContactUsForm';

const ContactUs = () => {
  return (
    <section className={css.section} id="contactUs">
      <h2 className="title">Contact us</h2>
      <address className={css.address}>
        <ul className={css.list}>
          <li>
            <h4 className={css.title}>Phone:</h4>
            <div className={css.telWrap}>
              <a href="tel:+3809981234567" className={css.link}>
                <svg width="24" height="24" className={css.icon}>
                  <use href={`${sprite}#icon-call`} />
                </svg>
                <span>38 (098) 12 34 567</span>
              </a>
              <a href="tel:+380931234567" className={css.link}>
                <svg width="24" height="24" className={css.icon}>
                  <use href={`${sprite}#icon-call`} />
                </svg>
                <span>38 (093) 12 34 567</span>
              </a>
            </div>
          </li>
          <li>
            <h4 className={css.title}>E-mail:</h4>
            <div>
              <a href="mailto:office@ecosolution.com" className={css.link}>
                <svg width="24" height="24" className={css.icon}>
                  <use href={`${sprite}#icon-sms`} />
                </svg>
                <span>office@ecosolution.com</span>
              </a>
            </div>
          </li>
          <li>
            <h4 className={css.title}>Address:</h4>
            <div>
              <a
                href="https://www.google.com/maps/d/u/0/viewer?mid=10uSM3H-mIU3GznYo2szRIEphczw&hl=en_US&ll=49.83104779596067%2C24.03532398042603&z=17"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                <svg width="24" height="24" className={css.icon}>
                  <use href={`${sprite}#icon-map`} />
                </svg>
                <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
              </a>
            </div>
          </li>
          <li>
            <h4 className={css.title}>Social Networks:</h4>
            <div className={css.social}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                <svg width="24" height="24" className={css.icon}>
                  <use
                    href={`${sprite}#icon-facebook`}
                    width="24"
                    height="24"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                <svg width="24" height="24" className={css.icon}>
                  <use href={`${sprite}#icon-instagram`} />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </address>
      <ContactUsForm />
    </section>
  );
};

export default ContactUs;
