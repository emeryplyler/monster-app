import logo from "./logo.svg";
import "./App.css";
import Tests from "./Tests";
import React from "react";
import Monsters from "./monsters/Monsters";
import MonsterDetails from "./monsters/MonsterDetails";
import MonstersPage from "./app/page";

import { HashRouter, Routes, Route } from "react-router-dom";
import { CSSModuleApp } from "./cssmoduleexample/page";
import Link from "next/link";

function App() {
  return (
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<Monsters />} />
    //     <Route path="/cssmoduleexample" element={<CSSModuleApp />} />
    //     <Route path="/tests" element={<Tests />} />
    //     <Route path="/monsters/:monsterid" element={<MonsterDetails />} />
    //   </Routes>
    // </HashRouter>
    <>
      {/* <Monsters />
      <Link href="/cssmoduleexample">CSS Module Example</Link> */}
      <MonstersPage></MonstersPage>
    </>
    
  );
}

export default App;
