import React from 'react'

import Joke from './Joke'

const Jokes = [{
    question: 'What do you do when you see a space man?',
    punchLine: 'You park your car, man!'
  },{
    question: 'What did the hat say to the hat rack?',
    punchLine: 'You stay here, I\'ll go on ahead.'
  },{
    question: 'Why did the mermaid wear sea shells?',
    punchLine: 'She grew out of her B-Shells.'
  },{
    question: 'What did the 0 say to the 8?',
    punchLine: 'Nice belt!'
  },{
    question: 'What do you call a five foot psychic that\'s escaped from jail?',
    punchLine: 'A small medium at large.'
}]

const App = () => {
  return (
    <div>
      <Joke joke = {Jokes[0]}/>
      <Joke joke = {Jokes[1]}/>
      <Joke joke = {Jokes[2]}/>
      <Joke joke = {Jokes[3]}/>
      <Joke joke = {Jokes[4]}/>
    </div>
  )
}

export default App
