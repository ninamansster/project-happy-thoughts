import React, { useEffect, useState } from 'react'
import { HappyThought } from './components/HappyThought.js'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div>
      {thoughts.map(thought => (
        <HappyThought key={thought._id}
          thought={thought} />
      ))}
    </div>
  )
}
