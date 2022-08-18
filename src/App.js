import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

function App() {
  return (
    <div className="App mx-auto">
      <div className="container-fluid p-0">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
