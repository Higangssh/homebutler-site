import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Comparison from "./components/Comparison";
import KillingScenarios from "./components/KillingScenarios";
import ProductShot from "./components/ProductShot";
import AINative from "./components/AINative";
import SelfHealing from "./components/SelfHealing";
import Install from "./components/Install";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <div className="section-divider" />
        <Comparison />
        <div className="section-divider" />
        <KillingScenarios />
        <div className="section-divider" />
        <ProductShot />
        <div className="section-divider" />
        <AINative />
        <div className="section-divider" />
        <SelfHealing />
        <div className="section-divider" />
        <Install />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
