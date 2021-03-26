import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lista_Personas from "./components/Lista_Personas";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Lista_Personas} />
        {/* <Route exact path='/editar' component={Lista_Personas} /> */}
      </Router>

    </div>
  );
}

export default App;
