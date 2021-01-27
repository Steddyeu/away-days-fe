import "./App.css";
import { Router } from "@reach/router";
import Hero from "./components/Hero";
import SearchStadiumsList from "./components/SearchStadiumsList";
import StadiumsList from "./components/StadiumsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Hero path="/" />

        <StadiumsList path="/countries/:country" />
      </Router>
    </div>
  );
}

export default App;
