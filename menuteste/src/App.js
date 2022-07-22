import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Menu from "./components/Menu";
import Rota from "./components/Rota";




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
