import React from "react";

export const ToDo = ({ task, deleteToDo, editToDo }) => {
  const changeComplete = () => {
    editToDo({ ...task, completed: !task.completed });
  };

  const changeToDo = () => {
    editToDo({ ...task, isEditing: !task.isEditing });
  };

  return (
    <div class="ToDo">
      <p
        onClick={changeComplete}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <button className="todo-button" onClick={changeToDo}>
          Edit
        </button>
        <button
          className="todo-button"
          onClick={() => deleteToDo(task)} //Link to Delete ToDo , if click deleted the task with the ID
        >
          Delete
        </button>
      </div>
    </div>
  );
};
