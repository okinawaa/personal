import { Languages, Footer } from "./components/common";
import Router from "./router";

const App = () => {
  return (
    <div>
      <Router />
      <Footer />
      <Languages />
    </div>
  );
};

export default App;
