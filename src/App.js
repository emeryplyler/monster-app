import logo from "./logo.svg";
import "./App.css";
import Tests from "./Tests";
import React from "react";
import Monsters from "./monsters/Monsters";
import MonsterDetails from "./monsters/MonsterDetails";

import { HashRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { CSSModuleApp } from "./cssmoduleexample/cssmoduleapp";
import ErrorComponent from "./components/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorComponent />,
    
    children: [
      { path: "/", element: <Monsters /> },
      { path: "/tests", element: <Tests /> },
      { path: "/cssmoduleexample", element: <CSSModuleApp /> },
      { path: "/monsters/:monsterid", element: <MonsterDetails /> }
    ]
  }
]);

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
    <RouterProvider router={router} />
  );
}

export default App;
