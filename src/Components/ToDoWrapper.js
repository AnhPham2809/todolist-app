import React, { useState } from "react";
import { ToDo } from "./Todo";
import ToDoInput from "./ToDoInput";

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (newTask) => {
    setToDos([...toDos, newTask]);
    // IMPROVEMENT: remove all the console.log when you commit code
  };

  const deleteToDo = (task) => {
    setToDos(toDos.filter((todo) => todo.id !== task.id));
  };

  // IMPROVEMENT: editToDo, editTask, toggleComplete are essentially the same edit function
  const editToDo = (editedTask) => {
    const newTasks = toDos.map((todo) =>
      todo.id === editedTask.id ? editedTask : todo
    );
    setToDos(newTasks);
  };

  return (
    <div className="ToDoWrapper">
      <h1> The To Do List!</h1>
      <ToDoInput addToDo={addToDo} />
      {toDos.map((todo) =>
        todo.isEditing ? (
          <ToDoInput mode="edit" editToDo={editToDo} task={todo} />
        ) : (
          <ToDo task={todo} deleteToDo={deleteToDo} editToDo={editToDo} />
        )
      )}
    </div>
  );
};
