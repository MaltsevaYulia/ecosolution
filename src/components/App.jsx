import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from './Loader/Loader';
import Main from './Main/Main';
const Header = lazy(() => import('./Header/Header'));  
const About =lazy(()=>import('./About/About')) ;
const Values =lazy(()=>import('./Values/Values')) ;
const Electricity =lazy(()=>import('./Electricity/Electricity')) ;
const Services =lazy(()=>import('./Services/Services')) ;
const Cases =lazy(()=>import('./Cases/Cases')) ;
const FAQ =lazy(()=>import('./FAQ/FAQ')) ;
const Customers =lazy(()=>import('./Customers/Customers')) ;
const ContactUs =lazy(()=>import('./ContactUs/ContactUs')) ;
const Footer =lazy(()=>import('./Footer/Footer')) ;

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <main>
        <h1 className="visually-hidden">Renewable energy for any task</h1>
        <Main />
        <About />
        <Values />
        <Electricity />
        <Services />
        <Cases />
        <FAQ />
        <Customers />
        <ContactUs />
      </main>
      <Footer />
    </Suspense>
  );
};
