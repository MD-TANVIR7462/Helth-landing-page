import { Banner } from "./components/banner";
// import CallToAction from "./components/CallTo-Action";
import { CustomerReviews } from "./components/customer-reviews";
import EcoHelth from "./components/Eco-helth";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import HaveAquestion from "./components/have-question";
import { Header } from "./components/header";
import LandingSection from "./components/LandingProducts";
import { Packages } from "./components/packages";
import { Satisfaction } from "./components/satisfaction";
import SellingFast from "./components/sellingFast";
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
      {/* <CallToAction /> */}
      <WhyUrinaryFormula />
      <EcoHelth />
      <WhyItWorks />
      <LandingSection />
      <Satisfaction/>
      <Packages />
      <SellingFast />
      <Faq />
      <CustomerReviews/>
      <HaveAquestion/>
      <Footer />
    </div>
  );
}
