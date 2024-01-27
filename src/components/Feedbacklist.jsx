import React from "react"
import { useContext } from "react"
import { FeedbackContext } from "./FeedbackContext"
import {motion,AnimatePresence} from 'framer-motion'
import Rating from "./ratings"
function Feedbacklist() {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length===0){
        return <p>no feedback received</p>
    }

    //the map function iterates over the array feed which is actually a prop on Feedbacklist and it makes a new Rating type componenet for each item present in the array
    //info is a prop that takes the information of each item in the array
  return (
    
    <div className="feedback-list">
    <AnimatePresence>
   
    {feedback.map((item)=>(
     
      <motion.div
      key={item.id}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      
      >

      
        <Rating key={item.id} info={item}/>
        </motion.div>
  

    ))}
    </AnimatePresence>
    </div>

  )
}

export default Feedbacklist