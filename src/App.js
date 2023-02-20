//Below are all the imports to be able to use redux tools and hooks.
//Also the actions from toDo.js are imported to be used in the app.
import { useSelector, useDispatch } from "react-redux";
import { add, remove, edit, completed } from "./store/toDo";
import { useState } from "react";
import "./App.css";

function App() {
  //Below is the variable that stores the dispatch function.
  const dispatch = useDispatch();
  //Below is the variable that stores the state object that will be used for the to do items.
  const tasks = useSelector((state) => state.toDo.data);

  //Below is the arrow function that handles adding items to the list.
  const handleAddTask = (event) => {
    event.preventDefault();
    const taskContent = event.target.taskContent.value;
    dispatch(add({ content: taskContent }));
    event.target.reset();
  };

  //Below is the function that handles removing a todo item from the list by dispatching the remove reducer.
  const handleRemoveTask = (taskId) => {
    dispatch(remove(taskId));
  };

  //Below is the function that handles editing a todo item from the list by dispatching the edit reducer.
  const handleEditTask = (taskId, newContent) => {
    dispatch(edit({ id: taskId, content: newContent }));
  };

  //Below is the function that creates a toggle functionality on each item in the todo list.
  const handleToggleCompleted = (taskId) => {
    dispatch(completed(taskId));
  };

  //Below is all the elements and components rendered to the page to create the to do list.
  return (
    <div className="App">
      <h1 className="toDoHeading">To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input className="inputForm" type="text" name="taskContent" />
        <button type="submit" className="buttons">
          Add
        </button>
      </form>
      <ul>
        {Object.entries(tasks).map(([taskId, task]) => (
          <li key={taskId}>
            {task.content}{" "}
            <button onClick={() => handleRemoveTask(taskId)}>Remove</button>{" "}
            <button
              onClick={() =>
                handleEditTask(taskId, prompt("Enter new content"))
              }
            >
              Edit
            </button>{" "}
            <button onClick={() => handleToggleCompleted(taskId)}>
              {task.completed ? "\u2705" : "\u2716"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
