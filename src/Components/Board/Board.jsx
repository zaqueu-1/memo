import React, { useState, useEffect } from 'react'
import List from '../List/List'
import './board.css'
import { MdAddCircle } from 'react-icons/md'
import { AppConsumer } from '../../Contexts/appContext'


function Board() {

  const {text,
        setText,
        todoArray,
        setTodoArray} = AppConsumer()

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todo'))
    if (todo) {
    setTodoArray(todo)
    }
  }, [])
  

  function handleSubmit(e) {
    e.preventDefault()

    let newTask = {
      id: Math.random(),
      text: text,
      status: 'todo'
    }
    
    if (text === '') {
      alert('digite uma tarefa')
      return
    }

    setTodoArray([...todoArray, newTask])
    localStorage.setItem('todo', JSON.stringify([...todoArray, newTask]))
    setText('')
  }

  return (
    <>
    <div className='newtask-container'>
      <input type="text" className="newtask-input" placeholder='digite uma tarefa' value={text} onChange={(e) => setText(e.target.value)} ></input>
      <button className="add-btn" onClick={(e) => handleSubmit(e)}><MdAddCircle className='add-icon'/></button>
    </div>

    <div className='board-container'>
      <List type={'a fazer'} array={todoArray} />
      <List type={'fazendo'} array={todoArray}/>
      <List type={'finalizadas'} array={todoArray}/>
    </div>
    </>
  )
}

export default Board
