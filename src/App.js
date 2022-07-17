import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About'
import Counter from './Components/Counter';
import ScreenSize from './Components/ScreenSize';

function App() {
  let [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }
  return (
    <>
    {/*   **** Project 1 ****
        <Navbar myMode={mode} toggleTheme={toggleMode} />
        <About />
        <Counter />
    */}
    <ScreenSize/>
    </>
  );
}
export default App;
