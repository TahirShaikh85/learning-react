import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Project1/Navbar';
import About from './Components/Project1/About';
import Counter from './Components/Project1/Counter';
import ScreenSize from './Components/Project2/ScreenSize';
import Project3 from './Components/Project3/Project3';

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

      {/* **** Project 2 ****
    <ScreenSize/> 
    */}

    {/* Project 3 (Github user data)  */}
    <Project3/>

    </>
  );
}
export default App;
