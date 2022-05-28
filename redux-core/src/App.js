import './App.css';
import React from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <Header />
      <Todos/>
    </div>
  );
}


export default App;
