import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";
import { Footer } from "./components/shared/Footer";
import { MobileMenu } from "./components/shared/MobileMenu";
import { Navbar } from "./components/shared/Navbar";

const App = () => {
  return (
    <main className="">
      <Navbar />
      <div className="min-h-[50svh]"></div>
      <Footer />
    </main>
  );
};

export default App;
