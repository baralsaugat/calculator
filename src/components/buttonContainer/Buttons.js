import React from 'react'
import './button.style.css'

const buttons = [
    "AC", "C", "ON", "OFF", 7,8,9,4,5,6,1,2,3,0, "/","*", "+", "-", "=", "."
];

export const Buttons = ({buttonClick}) => {
    return (
        <div className= "buttons">
           {
              buttons.map((item,i) =>(
                <button key={i} 
                className="numBtn"
                onClick = {() => buttonClick(item)}>{item}</button>)



              ) 
           }
        </div>
    )
}
