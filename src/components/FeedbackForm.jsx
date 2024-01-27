import React, { useState } from 'react'
import { useContext, useEffect } from "react"
import { FeedbackContext } from "./FeedbackContext"
import Card from './shared/Card'
import Button from './shared/Button'
import RatingList from './RatingList'
function FeedbackForm() {

    const[rating,setratingbtn] =useState(10)
    const [text, setText]= useState('')
    const[btnDisable,setbtnDisable]=useState(true)
    const[message,setmessage]=useState('')
    const {handleadd, feedEdit, updtEdit} = useContext(FeedbackContext)

    useEffect(()=>{
      if(feedEdit.edit === true){
        setbtnDisable(false)
        setText(feedEdit.item.text)
        setratingbtn(feedEdit.item.rating)
      }
     
    }, [feedEdit])//the second argument is an array of dependencies so whenever we update this dependency the useeffect function hapens

    const handletext = (event)=>{
        if(text === ''){
            setbtnDisable(true)
            setmessage(null)

        }
        else if(text !== '' && text.trim().length<=10){
            //.trim is used to omit the white spaces so that it doesnt count it
            setmessage('text must be greater than 10')
            setbtnDisable(true)
        }
        else{
            setmessage(null)
            setbtnDisable(false)
        }

        setText(event.target.value)
    }

    const handlesubmit = (e)=>{
        //preventdefault stops the form from submitting so u can put your validations before
      e.preventDefault()  
      if(text.trim().length > 10){
        //make a new object and contain all the info of feedback in it
        const newFedd={
            text,
            rating
        }

        if(feedEdit.edit === true){
          updtEdit(feedEdit.item.id, newFedd)
        }
        else{
        //adds the new info
        handleadd(newFedd)
        }
        //clears the text
        setText('')

      }

    }

  


  return (
   <Card>
    <form onSubmit={handlesubmit}>
   <h2>How would you rate our services?</h2> 
   <RatingList select={(rating)=>setratingbtn(rating)} />
    <div className='input-group'>
    <input type ='text' placeholder='Write your review here...' value={text} onChange={handletext}/>
    <Button type='submit' isDisabled={btnDisable}>Send</Button>
    </div>
   <div className='message'>{message}</div>
    </form>
    </Card>

  )
}

export default FeedbackForm