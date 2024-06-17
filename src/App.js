import logo from './logo.svg';
import './App.css';
import Tests from './Tests';
import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { CSSModuleApp } from './cssmoduleexample/cssmoduleapp';

function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Tests/>} />
          <Route path='/cssmoduleexample' element={<CSSModuleApp/>} />
        </Routes>
      </HashRouter>
    // )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>

  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>

  //       <a href='/cssmoduleexample/cssmoduleapp.js'>
  //         CSS module test page
  //       </a>

  //       <div>
  //         {Tests()}
  //       </div>
        
  //     </header>
  //   </div>
  );
}

export default App;
