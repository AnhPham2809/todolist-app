import React, { useState } from "react";
import { ToDo } from "./Todo";
import ToDoInput from "./ToDoInput";

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);
  const [sortMode, setSortMode] = useState("all"); // For complete/incomplete sort
  const [dueDateSort, setDueDateSort] = useState("ascending") //Due date ascending/descending
  // const [alphabeticalSort, setAlphabeticalSort] = useState(false); This is for Alphabetically Checkbox Sort

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

const handleSortChange = (e) => {
  setSortMode(e.target.value);
}

const handleDueDateSortChange = (e) => {
  setDueDateSort(e.target.value);
}

// const handleSortAlphabetical = (e) => {
//   setAlphabeticalSort(e.target.checked); 
// }
//This is mainly for testing a Checkbox Version of Sorting Alphabetically

const sortedToDo = () => {
let sortedToDo = toDos;

  if (sortMode === "done") {
    sortedToDo = sortedToDo.filter((todo) =>todo.completed);
  }
  else if (sortMode === "notDone") {
    sortedToDo = sortedToDo.filter((todo) =>!todo.completed);
  }

  if (dueDateSort === "ascending"){
    sortedToDo = sortedToDo.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } 
  else if (dueDateSort === "descending"){
    sortedToDo = sortedToDo.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
  }  

  //This Due date sorting is based on the positive/negative value between task a and b's date. If it's positive, a will come before b and vice versa.

  // if (alphabeticalSort){
  //   sortedToDo = sortedToDo.sort((a,b) => a.task.localeCompare(b.task));
  // }
  //Alphabetically checkbox Sort
if (sortMode === "alphabetically")
  {
    sortedToDo = sortedToDo.sort((a,b) => a.task.localeCompare(b.task)); 
  }
    return sortedToDo;
}

return (
  <div className="ToDoWrapper">
    <h1> The To Do List!</h1>
    <ToDoInput addToDo={addToDo} />
    <div>
      <label>
        Sort by:
        <select value={sortMode} onChange={handleSortChange}>
          <option value="all">All</option>
          <option value="done">Completed</option>
          <option value="notDone">Not Completed</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </label>

      {/* <div>
        <input
        type="checkbox"
        checked = {alphabeticalSort}
        onChange={(handleSortAlphabetical)}
         />
          <label>Sort Alphabetically?</label>
      </div> */}
      
      <label>
        Due Date Sort:
        <select 
        value={dueDateSort}
        onChange={handleDueDateSortChange}
        >
        <option value ="ascending">Ascending Order</option>
        <option value ="descending">Descending Order</option>
        </select>
      </label>
    </div>
    {sortedToDo().map((todo) =>
      todo.isEditing? (
        <ToDoInput mode="edit" editToDo={editToDo} task={todo} />
      ) : (
        <ToDo task={todo} deleteToDo={deleteToDo} editToDo={editToDo} />
      )
    )}
  </div>
  );
};
