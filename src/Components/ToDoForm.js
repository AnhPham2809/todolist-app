import React, { useState } from "react";

export const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(value);
    setValue(""); //This line makes the text disappears when you submit the text
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the activity?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
};
