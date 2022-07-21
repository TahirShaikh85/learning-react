import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Project1/Navbar';
import About from './Components/Project1/About';
import Counter from './Components/Project1/Counter';
import ScreenSize from './Components/Project2/ScreenSize';
import Project3 from './Components/Project3/Project3';

import UseState from './learning/useState/UseState';
import UseState2 from './learning/useState/useState2';
import UseState3 from './learning/useState/useState3';

import UseLayoutEffect from './learning/useLayoutEffect/useLayoutEffect';
import UseReducer from './learning/useReducer/useReducer';

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

    {/* Project 3 (Github user data)  
    <Project3/>
    */}
    
    {/* learning useState() 
    <UseState/>
    <UseState2/>
    <UseState3/>

    */}

    {/* learning useLayoutEffect() hook
    <UseLayoutEffect/> 
    */}

    <UseReducer/>
    
    </>
  );
}
export default App;
