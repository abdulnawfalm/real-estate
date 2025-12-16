import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PropertiesSection from "./components/PropertiesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CommunitiesSection from "./components/CommunitiesSection";
import PremiumExperience from "./components/PremiumExperience";
import DreamHomeCTA from "./components/DreamHomeCTA";
import AboutUAE from "./components/AboutUAE";
import VideoHero from "./components/VideoHero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


 

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PropertiesSection />
      <WhyChooseUs />
      <CommunitiesSection />
      <PremiumExperience />
      <DreamHomeCTA />
      <AboutUAE />
      <VideoHero />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
