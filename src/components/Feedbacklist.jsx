import React from "react"
import { useContext } from "react"
import { FeedbackContext } from "./FeedbackContext"
import {motion,AnimatePresence} from 'framer-motion'
import Spinner from "./shared/Spinner"
import Rating from "./ratings"

function Feedbacklist() {

    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length===0)){
        return <p>no feedback received</p>
    }

    //the map function iterates over the array feed which is actually a prop on Feedbacklist and it makes a new Rating type componenet for each item present in the array
    //info is a prop that takes the information of each item in the array
  return isLoading ?(<Spinner/>) :  (

  
   
    <div className="feedback-list">
    <AnimatePresence>
   
    {feedback.map((item)=>(
     
      <motion.div
      key={item.id}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>

      
        <Rating key={item.id} info={item}/>
        </motion.div>
  

    ))}
    </AnimatePresence>
    </div>
    
    
  )
}

export default Feedbacklist