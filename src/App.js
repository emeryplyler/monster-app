import logo from "./logo.svg";
import "./App.css";
import Tests from "./Tests";
import React from "react";
import Monsters from "./monsters/Monsters";
import MonsterDetails from "./monsters/MonsterDetails";

import { HashRouter, Routes, Route } from "react-router-dom";
import { CSSModuleApp } from "./cssmoduleexample/cssmoduleapp";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Monsters />} />
        <Route path="/cssmoduleexample" element={<CSSModuleApp />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/monsters/:monsterid" element={<MonsterDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
