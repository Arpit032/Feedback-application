import React from "react"
import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'
import { FaEdit } from "react-icons/fa"
import { useContext } from "react"
import { FeedbackContext } from "./FeedbackContext"
function Rating({info}){
const {handledelete,editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={true}>
    
    <div className='num-display'>{info.rating}</div>
    
    <button onClick ={()=>editFeedback(info)}
    className="edit"><FaEdit color="purple"/></button>
    
    <button onClick={()=>handledelete(info.id)} 
    className="close"><FaTimes color='purple'/></button>
    
    <div className='text-display'>{info.text}</div>
   
    
    </Card>

   
  )
}

export default Rating