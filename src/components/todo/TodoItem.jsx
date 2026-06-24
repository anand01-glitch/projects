import { useState } from "react";

function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  const handleSave = () => {
    const nextTitle = draft.trim();
    if (!nextTitle) {
      return;
    }
    onUpdate(todo.id, nextTitle);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "todo-completed" : ""}`}>
      <div className="todo-item-main">
        <label className="todo-checkbox">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span className="checkbox-custom" />
        </label>

        {isEditing ? (
          <input
            className="todo-edit-input"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={handleSave}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSave();
              }
            }}
          />
        ) : (
          <button
            type="button"
            className="todo-title-button"
            onClick={() => setIsEditing(true)}
          >
            {todo.title}
          </button>
        )}
      </div>

      <div className="todo-item-actions">
        <button type="button" className="todo-action-button" onClick={() => setIsEditing((value) => !value)}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button type="button" className="todo-action-button todo-action-delete" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
