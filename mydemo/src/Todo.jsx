import React, { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];

    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);

    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    case "UPDATE":
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );

    default:
      return state;
  }
};

function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("NEWEST");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    if (editId) {
      dispatch({ type: "UPDATE", payload: { id: editId, text: task } });
      setEditId(null);
    } else {
      dispatch({ type: "ADD", payload: task });
    }

    setTask("");
  };

  const filteredTodos = todos
    .filter(todo => {
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter =
        filter === "ALL" ||
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => (sortOrder === "NEWEST" ? b.id - a.id : a.id - b.id));

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📝 To-Do List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          required
          style={{ padding: "8px", width: "65%", marginRight: "5px" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {/* 🔍 Search, Filter, Sort */}
      <div style={{ marginTop: "15px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "6px", marginRight: "10px", width: "45%" }}
        />

        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="ALL">All</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
        </select>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          style={{ marginLeft: "10px" }}
        >
          <option value="NEWEST">Newest First</option>
          <option value="OLDEST">Oldest First</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px"
            }}
          >
            <span
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
              style={{
                flexGrow: 1,
                cursor: "pointer",
                color: todo.completed ? "green" : "red",
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => {
                setTask(todo.text);
                setEditId(todo.id);
              }}
            >
              ✏️
            </button>

            <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
