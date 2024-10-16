import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";
import { Hero } from "./components/home/Hero";
import { ProblemSolution } from "./components/home/ProblemSolution";
import { Reviews } from "./components/home/Reviews";
import { Footer } from "./components/shared/Footer";
import { MobileMenu } from "./components/shared/MobileMenu";
import { Navbar } from "./components/shared/Navbar";

const App = () => {
  return (
    <main className="font-nunito-sans bg-[url(Img/hero-bg.svg)] min-h-svh bg-no-repeat bg-top">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Reviews />
      <Footer />
    </main>
  );
};

export default App;
