import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Menu from "./components/Menu";
import Rota from "./components/Rota";
import Home from "./pages/Home";



function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Rota/>
      </Router>
      

    </div>
  );
}

export default App;
