import React,{useState} from 'react'

const TextField = () => {
    function upperC(){
        let newTxt = txt.toUpperCase();
        setTxt(newTxt)
    }
    function lowerC(){
        let newTxt = txt.toLowerCase();
        setTxt(newTxt)
    }
    function colorC(){
        let color = ['#3498db','#2ecc71','#8e44ad','#f1c40f','#e74c3c','#32ff7e']
        let randomElement = color[Math.floor(Math.random() * color.length)]
        console.log(randomElement)
        document.getElementById('textV').style.color = randomElement
    }

    const [txt,setTxt] = useState("Initial Text");
  return (
    <div className='container my-5'>
        <textarea value={txt} onChange={(e)=>{setTxt(e.target.value) }} name="" id="textV" cols="30" rows="10"></textarea>
        <div>
            <button className="btn btn-primary" onClick={upperC}>Convert To Upper Case</button>
            <button className="btn btn-primary ml-5" onClick={lowerC}>Convert To Lower Case</button>
            <button className="btn btn-primary ml-5" onClick={colorC}>Change Color</button>
        </div>
        <div className="container">
            <p>{txt.split(" ").length} words and {txt.length} characters</p>
            <p>Preview - {txt}</p>
        </div>
    </div>
  )
}

export default TextField