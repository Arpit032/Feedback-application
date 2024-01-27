import React from "react"
import { useContext} from "react"
import { FeedbackContext } from "./FeedbackContext"
function RatingSet() {
  const {feedback} = useContext(FeedbackContext)
  //sum of all the feedback ratings



  let sum = feedback.reduce((acc,cur)=>{
    return acc + cur.rating
  },0)
  //average
  let average = sum/feedback.length
  average = average.toFixed(1).replace(/[.,]0$/,'')


  return (
    <div className="feedback-stats">
    Reviews : {feedback.length}
    <h4>Average: {average}</h4>
        
    
    
    </div>
   
  )
}

export default RatingSet