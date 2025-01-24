import { Banner } from "./components/banner";
import EcoHelth from "./components/Eco-helth";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import HeartHealthySection from "./components/HeartHealthySection";
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
      <WhyUrinaryFormula />
      <EcoHelth/>
      <WhyItWorks />
      <Packages />
      <HeartHealthySection />
      <Faq />
      <Footer />
    </div>
  );
}
