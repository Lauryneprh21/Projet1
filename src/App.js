 
import React from 'react';
import Header from './components/Header';
 
import About from './components/About';
import Proposals from './components/Proposals';
import Processus from './components/Processus';
import GalerieRenovations from './components/GalerieRenovations';
import ContactSection from './components/ContactSection';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
 


const App = () => {
  return (
    <div className="App">
      <Header />
       
      <About />

      <Proposals />

      <Processus />

      <GalerieRenovations />

      <ContactSection />

      <ThankYou />

      <Footer />
    </div>
  );
};

export default App;