import React, {useState} from 'react'
import { ToDoForm } from './ToDoForm'
import { ToDo } from './Todo';
import {v4 as uuidv4} from 'uuid'; //Following tutorial
import { ToDoFormEdit } from './ToDoFormEdit';

uuidv4();

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = toDo =>{
    setToDos([...toDos, {id:uuidv4(),
       task: toDo, 
       completed: false, 
       isEditing:false}])
       console.log(toDos);
  }

  const toggleComplete = id => {
    setToDos(toDos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

const deleteToDo = id => {
  setToDos(toDos.filter(todo => todo.id !== id))
}

const editToDo = id => {
  setToDos(toDos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
}

const editTask = (task, id) => {
  setToDos(toDos.map(todo => todo.id ===id ? {...todo, task, isEditing: !todo.isEditing} : todo))
}

  return (
    <div className='ToDoWrapper'>
      <h1> The To Do List!</h1>
      <ToDoForm addToDo ={addToDo}/>
      {toDos.map((todo, index) => (
        todo.isEditing ? (
<ToDoFormEdit editToDo={editTask} task ={todo}/>
        ) :
        <ToDo task={todo} key={index} 
        toggleComplete={toggleComplete}
        deleteToDo = {deleteToDo}
        editToDo={editToDo}
        />
      ))}
    </div>
  )
}
