import React from 'react'
import {v4 as uuid} from 'uuid'
import { createContext,useState } from 'react'
//component names should always start with a capital l
//creating a context
export const FeedbackContext = createContext()
//we're gonna wrap our prop states components in this provider
export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback] = useState([
        {
            id : 1,
            rating: 10,
            text: "this is a text"
        },
    ]

    )


    const updtEdit = (id,updtFeed) => {

        setFeedback(feedback.map((item)=>{
            if (item.id === id) {
                // If the condition is true, create a new object with updated properties
                return { ...item, ...updtFeed };
            } else {
                // If the condition is false, return the original item unchanged
                return item;
            }


        }))
        //console.log(id,updtFeed)

        }




        //to edit the card store in this state
        //feedEdit is the object that stores the info of new updated 
    const[feedEdit, setFeedEdit] = useState({
        //item stores the new edited info - rating,id,text
        //if edit is false that means no one has clicked it yet
        item : {},
        edit: false

    })

      //actual function to edit
      const editFeedback = (item) => {
        setFeedEdit({
            item: item,
            edit: true
        })
        
      }

   
    const handleadd = (newFeed) =>{
        newFeed.id= uuid()
        setFeedback([newFeed,...feedback])
    }
    const handledelete = (id)=> {
        if(window.confirm('delete this?')){
              setFeedback(feedback.filter((item)=>item.id!==id))
        }
     }

    
    


    return (
    <FeedbackContext.Provider value={{
        feedback, handledelete, handleadd, editFeedback, feedEdit, updtEdit
    }}>
    
    {children}
    
    </FeedbackContext.Provider>
    )
}
    
    


export default FeedbackProvider