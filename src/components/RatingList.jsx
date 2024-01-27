import React, { useState, useContext, useEffect } from 'react'
import { FeedbackContext } from "./FeedbackContext"
function RatingList({select}) {
    const {feedEdit} = useContext(FeedbackContext)

    const[ratinglist,setratinglist]=useState(10)

    useEffect(()=>{
      setratinglist(feedEdit.item.rating)
    },[feedEdit])

    const handlechange = (e)=>
    {
        setratinglist(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
  return (
    <div>
    
    <ul className='rating'>
    
    <li>
    <input type='radio' value='1' id='num1'onChange={handlechange} checked={ratinglist===1} ></input>
    <label htmlFor='num1'>1</label>
    </li>
    <li>
    <input type='radio' value='2' id='num2' checked={ratinglist===2} onChange={handlechange}></input>
    <label htmlFor='num2'>2</label>
    </li>
    <li>
    <input type='radio' value='3' id='num3'checked={ratinglist===3} onChange={handlechange}></input>
    <label htmlFor='num3' >3</label>
    </li>
    <li>
    <input type='radio' value='4' id='num4' checked={ratinglist===4} onChange={handlechange}></input>
    <label htmlFor='num4' >4</label>
    </li>
    <li>
    <input type='radio' value='5' id='num5' checked={ratinglist===5} onChange={handlechange}></input>
    <label htmlFor='num5' >5</label>
    </li>
    <li>
    <input type='radio' value='6' id='num6' checked={ratinglist===6} onChange={handlechange}></input>
    <label htmlFor='num6' >6</label>
    </li><li>
    <input type='radio' value='7' id='num7' checked={ratinglist===7} onChange={handlechange}></input>
    <label htmlFor='num7' >7</label>
    </li><li>
    <input type='radio' value='8' id='num8' checked={ratinglist===8} onChange={handlechange}></input>
    <label htmlFor='num8' >8</label>
    </li><li>
    <input type='radio' value='9' id='num9' checked={ratinglist===9} onChange={handlechange}></input>
    <label htmlFor='num9' >9</label>
    </li><li>
    <input type='radio' value='10' id='num10'checked={ratinglist===10} onChange={handlechange}></input>
    <label htmlFor='num10' >10</label>
    </li>
    
    
    </ul>
    
    </div>
  )
}

export default RatingList