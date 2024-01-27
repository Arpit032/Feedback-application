import React from "react"
//children prop is a keyword in react, it basically means the elements under this <Card></Card>, theyll be printed
function Card({children, reverse}) {
  return (
    <div className="card"

    style={{
        backgroundColor : reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color : reverse ? '#fff' : 'rgba(0,0,0,0.4)' ,
      
    }}  
    
    >{children}</div>
  )
}

export default Card