import React from 'react'
import Button from './Button'

function Header({title}) {

    function onClick() {
        console.log("Clicked")
    }   

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color= 'green' text= 'Add' onClick={onClick}/>
    </header>
  )
}

//CSS in JS
// const headerColor= {
//     color: 'red', 
//     background: 'black'
// }

export default Header;
