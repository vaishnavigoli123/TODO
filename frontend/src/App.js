import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Fetch Todos from Backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  // Function to Add a Todo
  const addTodo = () => {
    if (!newTodo.trim()) return; // Ignore empty input

    axios.post("http://localhost:5000/api/todos", { text: newTodo })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo(""); // Clear input field
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List</h1>

      {/* Input Field & Button */}
      <input
        type="text"
        placeholder="Enter a todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={addTodo} style={{ padding: "8px 15px", cursor: "pointer" }}>
        Add Todo
      </button>

      {/* Display Todos */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginTop: "10px" }}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
