import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Main from './pages/Main';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <div className="App">
          <Main />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
