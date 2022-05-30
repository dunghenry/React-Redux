import './App.css';
import React from 'react';
import Todos from './components/Todos';
import Navbar from './components/Navbar/index';
import Cats from './components/Cats/index';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;
