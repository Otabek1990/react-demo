import React from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import Main from './components/Main';

function App() {
  return (
    <div className='h-screen '>
      <Navbar />
      <Main />
    </div>
  )
}

export default App