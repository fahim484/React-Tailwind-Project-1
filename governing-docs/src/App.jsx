import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";
import { Hero } from "./components/home/Hero";
import { Footer } from "./components/shared/Footer";
import { MobileMenu } from "./components/shared/MobileMenu";
import { Navbar } from "./components/shared/Navbar";

const App = () => {
  return (
    <main className="font-nunito-sans bg-[url(Img/hero-bg.svg)] min-h-svh bg-no-repeat bg-top">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
