import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanesse" />
      <Pet name="Tomas" animal="cat" breed="Mixed" />
      <Pet name="Pepper" animal="parrot" breed="Cockatiel" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
