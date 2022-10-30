import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Main style={{maxWidth: '100vw', height: '100vh', paddingX: '10'}}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
