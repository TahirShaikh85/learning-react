import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import TextField from './Components/TextField'
import About from './Components/About'

function App() {
  let [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode == 'light'){
      setMode('dark')
    }else{
      setMode('light')
    }
  }
  return (
  <>
  <Navbar myMode={mode} toggleTheme={toggleMode} />
  {/* <TextField /> */}
  <About />
  </>
  );
}
export default App;
