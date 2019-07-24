import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';


function App(props) {
  
  return (
    <BrowserRouter>
    <div>
        <h1>Ntc React app</h1>
        <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
