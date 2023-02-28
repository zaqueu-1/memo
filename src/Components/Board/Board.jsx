import React, { useState, useEffect } from 'react'
import List from '../List/List'
import './board.css'
import { MdAddCircle } from 'react-icons/md'
import { AppConsumer } from '../../Contexts/appContext'
import { motion } from 'framer-motion'

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

  const [newTaskWarning, setNewTaskWarning] = useState(false)
  const [validationWarning, setValidationWarning] = useState(false)
  
  function handleSubmit(e) {
    e.preventDefault()

    let newTask = {
      id: Math.random(),
      text: text,
      status: 'todo'
    }
    
    if (text.length < 4) {
      setValidationWarning(true);
      setTimeout(() => {
        setValidationWarning(false);
      }, 2500);
      return
    }

    setNewTaskWarning(true);
    setTimeout(() => {
      setNewTaskWarning(false);
    }, 2500);
    setTodoArray([...todoArray, newTask])
    localStorage.setItem('todo', JSON.stringify([...todoArray, newTask]))
    setText('')
  }

  return (
    <>
    <div className='input-container'>
      <div className='newtask-container'>
        <input type="text" 
                className="newtask-input" 
                placeholder='digite uma tarefa' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                maxLength='94' >
        </input>
        <button className="add-btn" onClick={(e) => handleSubmit(e)}><MdAddCircle className='add-icon'/></button>
      </div>
      <div style={{height: '.5rem', marginBottom: '.5rem'}}>
        {newTaskWarning && <motion.p initial={{ x: -10, opacity: 0 }} 
                                     animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }} 
                                     exit={{ x:10, opacity: 0 }}
                                     className="task-warning">tarefa adicionada!</motion.p>}
        {validationWarning && <motion.p initial={{ x: -10, opacity: 0 }} 
                                        animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }} 
                                        exit={{ x:10, opacity: 0 }}
                                        className="validation-warning">digite no mínimo 4 caracteres!</motion.p>}
      </div>
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
