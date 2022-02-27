import React from 'react'
import Button from './Button'

function Header({title, onAdd, showAdd}) {


  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color= {showAdd ? 'red' : 'green'}
      text= {showAdd ? 'Close' : 'Add'} 
      onClick={onAdd}/>
    </header>
  )
}

//CSS in JS
// const headerColor= {
//     color: 'red', 
//     background: 'black'
// }

export default Header;
