import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";

const App = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Primary Button</Button>
      <Button className="bg-white text-black">Secondary Button</Button>
      <SectionTitle gradient="Solution">Problem &</SectionTitle>
    </main>
  );
};

export default App;
