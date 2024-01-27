import React from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { FeedbackProvider } from "./components/FeedbackContext"
import About from "./pages/About"


import Header from "./components/header"
import Feedbacklist from "./components/Feedbacklist"

import RatingSet from "./components/RatingSet"
import FeedbackForm from "./components/FeedbackForm"
import Abouticonlink from "./components/Abouticonlink"
function Hello(){
    
    //this is the use state hook in which feedback is a state variable and setFeedback is a function, initially the value of state variable feedback is set to FeedbackData
   
    //Feedbacklist down there is an instace of the component and feed is a prop, here inside the feed prop we're declaring the state variable feedback declared above with the initial state as FeedbackData

  

return (
    
    
        <><FeedbackProvider>
        <Router>
    <Header text="Feedback UI"/>
    <Abouticonlink/>
    <div className="container">
    <Routes>
    <Route
    exact path="/" element={
        <>
    <FeedbackForm/>
    <RatingSet classname='rating'/>
    <Feedbacklist/>
     
    </>
    }></Route>
    
    <Route path = "/about" element={<About/>}/>

    </Routes>
        </div>
        </Router>
        </FeedbackProvider>
        </>
        
    )
    
}

export default Hello
