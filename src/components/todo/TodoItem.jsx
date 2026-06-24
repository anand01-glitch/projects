import { useState } from "react";

function TodoItem({
  todo,
  onToggle,
  onUpdate,
  onDelete,
  draggingId,
  dragOverId,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
}) {
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

  const dragging = draggingId === todo.id;
  const dragTarget = dragOverId === todo.id && draggingId !== todo.id;

  return (
    <li
      className={`todo-item ${todo.completed ? "todo-completed" : ""} ${dragging ? "dragging" : ""} ${dragTarget ? "drag-target" : ""}`}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", todo.id);
        onDragStart(todo.id);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        onDragOver(todo.id);
      }}
      onDrop={(event) => {
        event.preventDefault();
        onDrop(todo.id);
      }}
      onDragEnd={onDragEnd}
    >
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
