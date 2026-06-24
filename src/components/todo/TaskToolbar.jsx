function TaskToolbar({
  search,
  onSearch,
  filter,
  onFilter,
  sortKey,
  onSort,
  theme,
  onToggleTheme,
  onBulkComplete,
  onBulkDelete,
  onUndo,
  canUndo,
}) {
  return (
    <div className="task-toolbar">
      <div className="toolbar-row toolbar-top">
        <div className="toolbar-search">
          <input
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            type="search"
            placeholder="Search tasks, tags, or priorities"
            aria-label="Search tasks"
          />
        </div>

        <button type="button" className="button button-secondary" onClick={onToggleTheme}>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>

      <div className="toolbar-row toolbar-bottom">
        <div className="toolbar-selects">
          <label>
            <span>Filter</span>
            <select value={filter} onChange={(event) => onFilter(event.target.value)}>
              <option value="all">All tasks</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="high">High priority</option>
            </select>
          </label>

          <label>
            <span>Sort</span>
            <select value={sortKey} onChange={(event) => onSort(event.target.value)}>
              <option value="order">Custom order</option>
              <option value="createdAt">Creation date</option>
              <option value="dueDate">Due date</option>
              <option value="priority">Priority</option>
              <option value="completed">Completion status</option>
            </select>
          </label>
        </div>

        <div className="toolbar-buttons">
          <button type="button" className="button button-secondary" onClick={onBulkComplete}>
            Complete all
          </button>
          <button type="button" className="button button-secondary" onClick={onBulkDelete}>
            Clear completed
          </button>
        </div>
      </div>

      {canUndo && (
        <div className="toolbar-undo">
          <p>Task deleted.</p>
          <button type="button" className="button button-primary" onClick={onUndo}>
            Undo delete
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskToolbar;
