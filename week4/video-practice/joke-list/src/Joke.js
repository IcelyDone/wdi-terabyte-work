import React from 'react'

const Joke = props => {
  console.log(props)
  return (
    <div>
      <h1>Question:</h1><p>{props.joke.question}</p>
      <h1>Answer:</h1><p>{props.joke.punchLine}</p>
      <hr/>
    </div>
  ) 
}

export default Joke
