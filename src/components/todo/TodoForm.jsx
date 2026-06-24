import { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      return;
    }
    onAdd(title);
    setTitle("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="todo-title">
        New task title
      </label>
      <input
        id="todo-title"
        className="todo-input"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new task"
        aria-label="Add a new task"
      />
      <button type="submit" className="button button-primary">
        Add task
      </button>
    </form>
  );
}

export default TodoForm;
