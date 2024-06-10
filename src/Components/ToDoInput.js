import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //Following tutorial
uuidv4();

// IMPROVEMENT: ToDoForm and ToDoFormEdit are essentailly the same component
function ToDoInput({ task, mode = "add", addToDo, editToDo }) {
  const [value, setValue] = useState(mode === "edit" ? task.task : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "edit") {
      editToDo({ ...task, task: value, isEditing: !task.isEditing });
    } else {
      addToDo({
        id: uuidv4(),
        task: value,
        completed: false,
        isEditing: false,
      });
    }
    setValue(""); //This line makes the text disappears when you submit the text
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder={
          mode === "edit" ? "Edit the Activity" : "What is the activity?"
        }
        value={value}
        onChange={(e) => setValue(e.target.value)} // IMPROVEMENT: this can be moved to a handleChange function
      />
      <button type="submit" className="todo-button">
        {mode === "edit" ? "Edit Task" : "Add"}
      </button>
    </form>
  );
}

export default ToDoInput;
