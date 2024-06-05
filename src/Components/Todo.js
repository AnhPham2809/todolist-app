import React from 'react'


export const ToDo = ({task, toggleComplete, deleteToDo, editToDo}) => {
  return (
    <div class='ToDo'>
      <p 
      onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div>
     <button className='todo-button'
     onClick={() => editToDo(task.id)}
     >Edit</button>
     <button className='todo-button' 
     onClick={() => deleteToDo(task.id)} //Link to Delete ToDo , if click deleted the task with the ID
     >Delete</button>
      </div>

    </div>
  )
}
