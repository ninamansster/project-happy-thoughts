import React, { useState } from 'react'
import './happyForm.css'

export const HappyForm = props => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch('https://happy-thoughts-ninamansster.herokuapp.com/', {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setMessage("")
        props.onFormSubmit(message)
      })

      .catch(err => console.log("error:", err))
  }

  return (
    <form>
      <h3>Post a Happy Thought here!</h3>
      {/* <p>{message}</p> */}
      <textarea
        autoFocus="autoFocus"
        rows='3'
        value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <p className="charCount">{message.length} / 140 </p>
      <button className="happyFormButton"
        type='submit'
        onClick={handleSubmit}
        disabled={message.length < 5 || message.length > 140 ? true : false}
      >
        <span role="img" aria-label="Heart">❤️</span>
        Send Happy Thought
        <span role="img" aria-label="Heart">❤️</span>
      </button>

    </form >
  )
}