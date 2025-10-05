import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerReviews from './components/CustomerReviews';
import PopularCities from './components/PopularCities';
import BlogSection from './components/BlogSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustIndicators />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerReviews />
      <PopularCities />
      <BlogSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;