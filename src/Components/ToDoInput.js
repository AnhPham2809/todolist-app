import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //Following tutorial
uuidv4();

// IMPROVEMENT: ToDoForm and ToDoFormEdit are essentailly the same component
function ToDoInput({ task, mode = "add", addToDo, editToDo }) {
  const [value, setValue] = useState(mode === "edit" ? task.task : "");
const [dueDate, setDueDate] = useState(mode === "edit" ? task.dueDate : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "edit") {
      editToDo({ ...task, task: value, dueDate, isEditing: !task.isEditing });
    } else {
      addToDo({
        id: uuidv4(),
        task: value,
        dueDate,
        completed: false,
        isEditing: false,
      });
    }
    setValue(""); //This line makes the text disappears when you submit the text
    setDueDate("");
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleDateChange = (e) => {
    setDueDate(e.target.value)
  }


  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder={
          mode === "edit" ? "Edit the Activity" : "What is the activity?"
        }
        value={value}
        onChange={handleChange} // IMPROVEMENT: this can be moved to a handleChange function
      />
            <input 
      className="todo-input"
      type="date"
        value = {dueDate}
        onChange={handleDateChange}
      ></input>
      <button type="submit" className="todo-button">
        {mode === "edit" ? "Edit Task" : "Add"}
      </button>
<br></br>

    </form>
  );
}

export default ToDoInput;
