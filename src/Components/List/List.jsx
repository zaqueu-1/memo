import React from 'react'
import Card from '../Card/Card'
import './list.css'

function List({type, array}) {

  return (
    <div className='list-container'>
        <ul>
            <li id='list-title'>{type}</li>
            <div className="list-wrapper">
            {type === 'a fazer' ? array.map((task) =>
                task.status === 'todo' ? 
                <li className='list-item'>
                  <Card key={task.id} taskId={task.id} taskText={task.text} taskStatus={task.status} />
                </li> 
                : null) : null}
              {type === 'fazendo' ? array.map((task) =>
                task.status === 'doing' ? 
                <li className='list-item'>
                  <Card key={task.id} taskId={task.id} taskText={task.text} taskStatus={task.status} />
                </li> 
                : null) : null}
              {type === 'finalizadas' ? array.map((task) =>
                task.status === 'done' ? 
                <li className='list-item'>
                  <Card key={task.id} taskId={task.id} taskText={task.text} taskStatus={task.status} />
                </li> 
                : null) : null}
            </div>
          </ul>
    </div>
  )
}

export default List
