import React, {useState} from 'react'

export const ToDoFormEdit = ({editToDo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editToDo(value, task.id);
    setValue(""); //This line makes the text disappears when you submit the text
  }

  return (
    <form className ="ToDoForm" onSubmit={handleSubmit}> 
    <input type ="text" className='todo-input' 
    placeholder='Edit the Activity'
    value = {value}
    onChange={(e) => setValue(e.target.value)}/> 
    <button type='submit' className='todo-button'>Edit Task</button>
    
    </form>
  )
}
