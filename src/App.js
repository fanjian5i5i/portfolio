import React from 'react';
import logo from './logo.svg';
import './App.css';

import Appbar from './components/Appbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Content/>
      <Appbar/>
    </div>
  );
}

export default App;
