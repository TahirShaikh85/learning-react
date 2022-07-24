import React, { useState, useCallback } from 'react';
import './App.css';
import Navbar from './Components/Project1/Navbar';
import About from './Components/Project1/About';
import Counter from './Components/Project1/Counter';
import ScreenSize from './Components/Project2/ScreenSize';
import Project3 from './Components/Project3/Project3';
import FoodGallery from './Components/Project4/FoodGallery';

import UseState from './learning/useState/UseState';
import UseState2 from './learning/useState/useState2';
import UseState3 from './learning/useState/useState3';
import UseLayoutEffect from './learning/useLayoutEffect/useLayoutEffect';
import UseReducer from './learning/useReducer/useReducer';

import UseCallback from './learning/useCallback/useCallback';
import Age from './learning/useCallback/Age';
import Instructions from './learning/useCallback/Instructions';

import UseRef from './learning/useRef/useRef';
import UseRef2 from './learning/useRef/useRef2';
import UseRefCheckout from './Components/Project5/useRefCheckout';
import UseMemo from './learning/useMemo/useMemo';
import UseTransition from './learning/useTransition/useTransition';

function App() {

  let [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  // useCallback()
  const [age, setAge] = useState(19);
  const [siblings, setSiblings] = useState(2);

  const handleClick = () => {
    setAge(prevAge => prevAge + 1);
  }
  const someValue = "Some value here";
  const doSomething = useCallback(() => {
    return someValue;
  }, [])

  return (
    <>
      {/*   **** Project 1 ****
        <Navbar myMode={mode} toggleTheme={toggleMode} />
        <About />
        <Counter />
    */}

      {/* **** Project 2 **** (calculate width of device)
    <ScreenSize/> 
    */}

      {/* **** Project 3 **** (Github user data)  
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

      {/* learning useReducer() hook 
    <UseReducer/> 
    */}

      {/* **** Project 4 **** (Food Image gallery)
      <FoodGallery/> 
    */}

      {/* learning useCallback() hook  


    <div>
      <Age age={age} handleClick={handleClick} />
      <button className='btn btn-success' onClick={()=>setSiblings(prevSibling => prevSibling + 1)}>Increase siblings</button>
      <Instructions doSomething={doSomething} siblings={siblings} />
    </div>

   */}

      {/* learning useRef()  
    <UseRef/>
    <UseRef2/>
    */}

    {/* ****** Project 5 ****** (Checkout page with useRef() hook) 
    <UseRefCheckout/>
    */}


    {/* learning useMemo() hook 
    <UseMemo/>
    */}

    {/* learning useTransition() hook */}
    <UseTransition/>
    </>
  );
}
export default App;
