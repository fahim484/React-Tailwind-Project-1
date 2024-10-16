// import { Button } from "./components/common/Button";
// import { SectionTitle } from "./components/common/SectionTitle";
// import { MobileMenu } from "./components/shared/MobileMenu";
import {
  Faq,
  Hero,
  Note,
  Partners,
  ProblemSolution,
  Reviews,
} from "./components/home";
import { Footer, Navbar } from "./components/shared";

const App = () => {
  return (
    <main className="font-nunito-sans bg-[url(Img/hero-bg.svg)] min-h-svh bg-no-repeat bg-top">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Reviews />
      <Partners />
      <Faq />
      <Note />
      <Footer />
    </main>
  );
};

export default App;
