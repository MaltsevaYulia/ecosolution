import Main from './Main/Main';
import Header from './Header/Header';
import About from './About/About';
import Values from './Values/Values';
import Electricity from './Electricity/Electricity';
import Services from './Services/Services';
import Cases from './Cases/Cases';
import FAQ from './FAQ/FAQ';
import Customers from './Customers/Customers';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main>
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
    </>
  );
};
