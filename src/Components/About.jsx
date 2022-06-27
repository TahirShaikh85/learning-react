import React, { useState } from 'react'

const About = () => {
    let [theme,setTheme] = useState({
            backgroundColor:"white",
            color:"black"
    })
    let [btnText,setBtnText] = useState("Enable Dark Mode");
    function changeTheme(){
        if(theme.color == 'black'){
            setTheme({
                backgroundColor:"black",
                color:"white"
        })
        setBtnText("Enable Light MOde")
        }else{
            setTheme({
                backgroundColor:"white",
                color:"black"
        })
        setBtnText("Enable Dark MOde")
        }
    }

  return (
    <div className="jumbotron " style={theme}>
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button" onClick={changeTheme}>{btnText}</a>
</div>
  )
}

export default About