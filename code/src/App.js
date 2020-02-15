import React, { useEffect, useState } from 'react'
import { HappyThought } from './components/HappyThought.js'
import { HappyForm } from './components/HappyForm.js'
import './app.css'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")


  useEffect(() => {
    fetch("http://localhost:8080/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const addLikeThought = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)

  }

  return (
    <div>
      <main>
        <div>
          <HappyForm onFormSubmit={onFormSubmit} />
        </div>
        <div>
          {thoughts.map(thought => (
            <HappyThought key={thought._id}
              thought={thought}
              addLikeThought={addLikeThought} />
          ))}
        </div>
      </main>
    </div>
  )
}
