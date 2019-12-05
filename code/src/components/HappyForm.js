import React, { useState } from 'react'

export const HappyForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    onFormSubmit(message)
  }
  return (
    <form>
      <h3>Post a happy thought here!</h3>
      <p>{message}</p>
      <textarea rows='3' onChange={event => setMessage(event.target.value)}></textarea>
      <button type='submit' onClick={handleSubmit}> Send your happy thought</button>
    </form>
  )
}