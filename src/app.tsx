import { Banner } from "./components/banner";
import CallToAction from "./components/CallTo-Action";
import EcoHelth from "./components/Eco-helth";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
// import HeartHealthySection from "./components/HeartHealthySection";
import LandingSection from "./components/LandingProducts";
import { Packages } from "./components/packages";
import { TheProblem } from "./components/the-problem";
import { TheSolution } from "./components/the-solution";
import { WhyItWorks } from "./components/why-it-works";
import { WhyUrinaryFormula } from "./components/why-urinary-formula";

export function App() {
  return (
    <div>
      <Header />
      <Banner />
      <TheProblem />
      <TheSolution />
      <CallToAction/>
      <WhyUrinaryFormula />
      <EcoHelth/>
      <WhyItWorks />
      <LandingSection/>
      <Packages />
      {/* <HeartHealthySection /> */}
      <Faq />
      <Footer />
    </div>
  );
}
