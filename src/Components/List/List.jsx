import React from 'react'
import Card from '../Card/Card'
import './list.css'

function List({ type, array }) {

  return (
    <div className='list-container'>
      <div className='list'>
        <p id='list-title'>{type}</p>
        <div className="list-wrapper">
        {type === 'a fazer' && array.map((task) =>
            task.status === 'todo' ?
              <div className='list-item'>
                <Card key={task.id} taskId={task.id} taskText={task.text} taskStatus={task.status} />
              </div> : null)}
            {type === 'fazendo' && array.map((task) =>
              task.status === 'doing' ? 
                <div className='list-item'>
                  <Card key={task.id} taskId={task.id} taskText={task.text} taskStatus={task.status} />
                </div> : null)}
            {type === 'finalizadas' && array.map((task) =>
              task.status === 'done' ? 
                <div className='list-item'>
                  <Card key={task.id} taskId={task.id} taskText={task.text} taskStatus={task.status} />
                </div> : null)}
        </div>
      </div>
    </div>
  )
}

export default List
