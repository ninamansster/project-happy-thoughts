import React from 'react'
import moment from 'moment'
import './happyThought.css'

export const HappyThought = (props) => {
  console.log('props', props)
  const { message, hearts, createdAt, _id: id } = props.thought

  const handleLikeThought = () => {
    fetch(`http://localhost:8080/${id}/like`, {
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
        <div className="likeThought">
          <button className="heartButton"
            type='submit'
            onClick={handleLikeThought}
            style={{ background: hearts > 0 ? "#ffadad" : "#f3f1f1  " }}
          >
            <span className="like" role="img" aria-label="Heart">❤️</span>
          </button>
          <span> x {hearts}</span>
        </div>
        <p>{moment(createdAt).fromNow()}</p>
      </div>
    </article>
  )
}