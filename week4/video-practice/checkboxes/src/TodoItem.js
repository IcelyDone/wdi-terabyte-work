import React from 'react'

const TodoItem = props => {
  const clog = () => console.log('Jebaited')
  return (
      <li style={{color: '#00FF00', fontSize: 24, fontWeight: 'bold'}}><input type="checkbox" onChange={clog} checked={props.item.completed}/><span>{props.item.text}</span></li>
  )
}

export default TodoItem
