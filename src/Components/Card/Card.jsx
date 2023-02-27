import React, { useState } from 'react'
import './card.css'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { AppConsumer } from '../../Contexts/appContext'
import { toast } from 'react-toastify'

function Card({ taskId, taskText, taskStatus }) {

  const {text,
        setText,
        todoArray,
        setTodoArray} = AppConsumer()

  const [taskstatus, setTaskStatus] = useState(taskStatus);

  function handleDelete(e) {
    e.preventDefault();

    let updatedTask = todoArray.filter((task) => task.id !== taskId)

    setTodoArray(updatedTask)
    toast.error('Tarefa excluída!')
    localStorage.setItem('todo', JSON.stringify(updatedTask))
  }

  function handleNextStatus(e) {
    e.preventDefault();

    if (taskStatus === 'todo') {
      let updatedTask = 
        todoArray.map((task) => {
          if (task.id === taskId) {
            task.status = 'doing'
          }

          return task
        })

      setTodoArray(updatedTask)
      localStorage.setItem('todo', JSON.stringify(updatedTask))
    }

    if (taskStatus === 'doing') {
      let updatedTask = 
      todoArray.map((task) => {
        if (task.id === taskId) {
          task.status = 'done'
        }

        return task
      })

      setTodoArray(updatedTask)
      localStorage.setItem('todo', JSON.stringify(updatedTask))
    }

  }

  function handlePrevStatus(e) {
    e.preventDefault();

    if (taskStatus === 'doing') {
      let updatedTask = 
        todoArray.map((task) => {
          if (task.id === taskId) {
            task.status = 'todo'
          }

          return task
        })

      setTodoArray(updatedTask)
      localStorage.setItem('todo', JSON.stringify(updatedTask))
    }

    if (taskStatus === 'done') {
      let updatedTask = 
      todoArray.map((task) => {
        if (task.id === taskId) {
          task.status = 'doing'
        }

        return task
      })

      setTodoArray(updatedTask)
      localStorage.setItem('todo', JSON.stringify(updatedTask))
    }

  }

  const [showControls, setShowControls] = useState(false);

  function handleMouseEnter() {
    setShowControls(true);
  }

  function handleMouseLeave() {
    setShowControls(false);
  }

  return (
    <div className='card-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p key={taskId} className={ taskStatus === 'done' ? 'card-text done' : 'card-text'}>
        {taskText}
      </p>
      {taskStatus === 'todo' ? (
        <>
        {showControls && 
                <div className='controls'>
                  <BsFillArrowRightCircleFill onClick={handleNextStatus} className='arrow' />
                  <RiDeleteBin2Fill onClick={handleDelete} className='delete-btn' />
                </div>}
        </>
      ) : taskStatus === 'doing' ? (
        <>
        {showControls && 
                <div className='controls'>
                  <BsFillArrowLeftCircleFill onClick={handlePrevStatus} className='arrow' />
                  <BsFillArrowRightCircleFill onClick={handleNextStatus} className='arrow' />
                  <RiDeleteBin2Fill onClick={handleDelete} className='delete-btn' />
                </div>}
        </>
      ) : (
        <>
        {showControls && 
                <div className='controls'>
                  <BsFillArrowLeftCircleFill onClick={handlePrevStatus} className='arrow' /> 
                  <RiDeleteBin2Fill onClick={handleDelete} className='delete-btn' />
                </div>}
        </>
      )}
    </div>
  );
}

export default Card;
