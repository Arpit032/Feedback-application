import React from 'react'
import { createContext,useState, useEffect } from 'react'
//component names should always start with a capital l
//creating a context
export const FeedbackContext = createContext()
//we're gonna wrap our prop states components in this provider
export const FeedbackProvider = ({children})=>{
const [feedback, setFeedback] = useState([])

const [isLoading, setLoading] = useState(true)

const updtEdit = async (id,updtFeed) => {
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updtFeed)
        })

        const data = await response.json()

        setFeedback(feedback.map((item)=>{
            //ternary -> (item.id === id ? { ...item, ...data } : item))
            if (item.id === id) {
                // If the condition is true, create a new object with updated properties
                return { ...item, ...data };
            } else {
                // If the condition is false, return the original item unchanged
                return item;
            }
        }))
   
        }
        useEffect(()=>{
            fetchFeed()
        },[])

        const fetchFeed = async () => {
            const response = await fetch('/feedback?_sort=rating')
            const data = await response.json()

            setFeedback(data)
            setLoading(false)
           
        }


        //to edit the card store in this state
        //feedEdit is the object that stores the info of new updated 
    const[feedEdit, setFeedEdit] =  useState({
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

   
    const handleadd = async (newFeed) =>{
        const response = await fetch('/feedback',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeed),
        })
        const data = await response.json()
        setFeedback([data,...feedback])
    }
    const handledelete = async (id)=> {
        if(window.confirm('delete this?')){
            await fetch(`/feedback/${id}`,{method: 'DELETE'})
              setFeedback(feedback.filter((item)=>item.id!==id))
        }
     }

    
    


    return (
    <FeedbackContext.Provider value={{
        feedback, handledelete, handleadd, editFeedback, feedEdit, updtEdit, isLoading,
    }}>
    
    {children}
    
    </FeedbackContext.Provider>
    )
}
    
    


export default FeedbackProvider