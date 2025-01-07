import BharatHeader from "./components/BharatHeader";
import BharatSlogan from "./components/BharatSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center className="bharat-clock-container">
      <BharatHeader />
      <BharatSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
