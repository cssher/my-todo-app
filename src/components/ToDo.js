import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./ToDo.css";

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: "Get the coat from dry clean" },
    { id: 2, text: "Buy coffee beans" },
    { id: 3, text: "Dinner with boss at 8pm" }
  ]);
  const [toDo, setToDo] = useState("");

  const generateId = () => {
    if (list && list.length > 1) {
      return Math.max(...list.map(t => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      alert("Please enter a task!");
      return;
    }
    const newId = generateId();
    const newToDo = { id: newId, text: toDo };
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = e => {
    setToDo(e.target.value);
  };

  const deleteItem = id => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="ToDo">
      <h1 className="ToDo-Header">My To-Do List</h1>
      <h20>
        ..........................................................................................
      </h20>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map(item => {
            return (
              <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />
            );
          })}
        </div>

        <div className="ToDoInput">
          <input
            type="text"
            placeholder="Enter your tasks here..."
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
