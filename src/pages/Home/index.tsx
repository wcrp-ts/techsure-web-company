import { useRef } from "react";
import MovingCircle from "../../components/Animation/MovingCircle";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import ValuesSection from "./components/ValuesSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ProductSection from "./components/ProductSection/ProductSection";
import EventSection from "./components/EventSection/EventSection";

const Home = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <MovingCircle hideOnRef={servicesRef} />

      <div style={{ position: "relative", zIndex: 50 }}>
        <HeroSection />
        <TrustedBy />
        <ValuesSection />
        
        <div ref={servicesRef}>
          <ServicesSection />
          <ProductSection />
          <EventSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
