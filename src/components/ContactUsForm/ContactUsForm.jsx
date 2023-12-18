import React from 'react';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonArrow from 'components/ButtonArrow/ButtonArrow';
import css from './ContactUsForm.module.css';

const notify = () => toast.success('Successfully');
const LS="formValues"

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Invalid phone format')
    .required('Phone is required and must be in the format +380961234567'),
  message: Yup.string().max(
    100,
    'Message cannot be longer than 100 characters'
  ),
});

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values,{ resetForm }) => {
      console.log('Form submitted with values:', values);
      localStorage.setItem(LS, JSON.stringify(values));
      resetForm();
      notify();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <label className={css.label}>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={css.input}
          placeholder="John Rosie"
        />
        <div className={css.errorContainer}>
          {formik.touched.fullName && formik.errors.fullName && (
            <div className={css.error}>{formik.errors.fullName}</div>
          )}
        </div>
      </label>

      <label className={css.label}>
        Email:
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={css.input}
          placeholder="johnrosie@gmail.com"
        />
        <div className={css.errorContainer}>
          {formik.touched.email && formik.errors.email && (
            <div className={css.error}>{formik.errors.email}</div>
          )}
        </div>
      </label>

      <label className={css.label}>
        Phone:
        <input
          type="tel"
          name="phone"
          placeholder="+380987654321"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={css.input}
        />
        <div className={css.errorContainer}>
          {formik.touched.phone && formik.errors.phone && (
            <div className={css.error}>{formik.errors.phone}</div>
          )}
        </div>
      </label>

      <label className={css.label}>
        Message:
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={css.input}
          placeholder="Your message"
        />
        <div className={css.errorContainer}>
          {formik.touched.message && formik.errors.message && (
            <div className={css.error}>{formik.errors.message}</div>
          )}
        </div>
      </label>
      <ButtonArrow text="Send" type="submit" />
    </form>
  );
};

export default ContactUsForm;
