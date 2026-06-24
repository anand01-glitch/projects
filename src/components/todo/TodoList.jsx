import TodoItem from "./TodoItem";

function TodoList({
  todos,
  loading,
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
  if (loading) {
    return (
      <div className="todo-empty-state">
        <div className="loading-card" />
        <div className="loading-card" />
        <div className="loading-card" />
      </div>
    );
  }

  if (!todos.length) {
    return (
      <div className="todo-empty-state">
        <div className="empty-card">
          <p className="empty-title">No tasks yet</p>
          <p className="empty-copy">Create your first todo to begin tracking progress.</p>
        </div>
      </div>
    );
  }

  return (
    <ul className="todo-list" aria-label="Todo list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
          draggingId={draggingId}
          dragOverId={dragOverId}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDrop={onDrop}
        />
      ))}
    </ul>
  );
}

export default TodoList;
