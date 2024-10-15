import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";
import { Footer } from "./components/shared/Footer";
import { MobileMenu } from "./components/shared/MobileMenu";
import { Navbar } from "./components/shared/Navbar";

const App = () => {
  return (
    <main className="bg-sky-300/50">
      <Navbar />
      <Footer />
    </main>
  );
};

export default App;
