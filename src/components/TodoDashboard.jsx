import { useEffect, useState } from "react";
import TodoHeader from "./todo/TodoHeader";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import ProgressBar from "./todo/ProgressBar";
import Statistics from "./todo/Statistics";

const STORAGE_KEY = "todo-dashboard-state";

function TodoDashboard() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTodos(Array.isArray(parsed) ? parsed : parsed.todos || []);
      } catch (error) {
        setTodos([]);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, loading]);

  const addTodo = (title) => {
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }

    const nextTodo = {
      id:
        typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      title: trimmed,
      completed: false,
    };

    setTodos((current) => [nextTodo, ...current]);
  };

  const toggleTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const updateTodo = (id, title) => {
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <section className="todo-page">
      <div className="todo-dashboard">
        <TodoHeader />

        <div className="todo-top-panel">
          <Statistics
            total={total}
            completed={completed}
            pending={pending}
            percent={percent}
          />
          <ProgressBar percent={percent} />
        </div>

        <div className="dashboard-card">
          <TodoForm onAdd={addTodo} />
          <TodoList
            todos={todos}
            loading={loading}
            onToggle={toggleTodo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </section>
  );
}

export default TodoDashboard;
