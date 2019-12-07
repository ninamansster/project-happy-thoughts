import React from 'react'
import moment from 'moment'
import './happyThought.css'

export const HappyThought = (props) => {
  console.log('props', props)
  const { message, hearts, createdAt, _id: id } = props.thought

  const handleLikeThought = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    })
      .then(() => props.addLikeThought(id))
  }

  return (
    <article>
      <h1>{message}</h1>
      <div className="heartTimer">
        <button className="heartButton"
          type='submit'
          onClick={handleLikeThought}>
          <span role="img" aria-label="Heart">❤️</span>
        </button>
        <span> x {hearts}</span>
        <p>{moment(createdAt).fromNow()}</p>
      </div>
    </article>
  )
}