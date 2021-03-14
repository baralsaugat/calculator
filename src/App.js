import { Display } from "./components/display/Display"
import {Buttons} from "./components/buttonContainer/Buttons"
import{useState} from "react"


import './App.css';



const App = () => {


  // declare local variable for display text
  const [displayText, setDisplayText] = useState("");

  const [history, sethistory] = useState()

  const [total, settotal] = useState();

  const [calculatorOn, setcalculatorOn] = useState(true)


  //  receive value when button is clicked
  const handleOnButtonClick = buttonValue => {

    if (total) {
      return settotal(null);
    };

    // total and return
    if(buttonValue=== "="){
      const ttl = eval(displayText);

      
      let extra = Math.ceil(Math.random()*10)
      if (extra > 3){
        extra = 0;
        
      }
      
      settotal(ttl+extra);
      sethistory(displayText);
      setDisplayText("");
      return;
    }
    if(buttonValue=== "OFF"){
      return setcalculatorOn(false);
    }

    // concat all the input value


    // backspace on C click
    if (buttonValue=== "C"){
      const str = displayText.slice(0,-1);
      return setDisplayText(str);
    }

    if (buttonValue === "AC"){
      return setDisplayText("");
    }

    setDisplayText(displayText + buttonValue);
    
  };
  

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "green" }}>Prank Calculator</h1>
      <div className="container">
        <div className="calculator">
          <div style = {{textAlign: "right", margin: "10px"}}>{total && history}</div>
          <Display txtDisp = {displayText}
          total = {total}
          history= {history}/>{calculatorOn ? (<Buttons buttonClick = {handleOnButtonClick}/>)
        :(<button className = "btnOn" onClick= {() => setcalculatorOn(true)}>ON</button>)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
