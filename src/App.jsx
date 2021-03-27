import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonForm from "./components/PersonForm";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainContainer} />
        <Route exact path='/form' component={PersonForm} />
      </Router>
    </div>
  );
}

export default App;
