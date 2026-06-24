import { useEffect, useState } from "react";
import TodoHeader from "./todo/TodoHeader";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import ProgressBar from "./todo/ProgressBar";
import Statistics from "./todo/Statistics";
import CelebrationOverlay from "./todo/CelebrationOverlay";

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

  const [draggingId, setDraggingId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);

  const moveTodo = (sourceId, targetId) => {
    setTodos((current) => {
      const startIndex = current.findIndex((todo) => todo.id === sourceId);
      const endIndex = current.findIndex((todo) => todo.id === targetId);
      if (startIndex === -1 || endIndex === -1 || startIndex === endIndex) {
        return current;
      }

      const nextTodos = [...current];
      const [movedItem] = nextTodos.splice(startIndex, 1);
      nextTodos.splice(endIndex, 0, movedItem);
      return nextTodos;
    });
  };

  const handleDragStart = (id) => setDraggingId(id);
  const handleDragOver = (id) => setDragOverId(id);
  const handleDragEnd = () => {
    setDraggingId(null);
    setDragOverId(null);
  };
  const handleDrop = (id) => {
    if (draggingId && id !== draggingId) {
      moveTodo(draggingId, id);
    }
    handleDragEnd();
  };

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationTime, setCelebrationTime] = useState("");

  useEffect(() => {
    if (total && percent === 100 && !showCelebration) {
      setCelebrationTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
      setShowCelebration(true);
    }
  }, [percent, total, showCelebration]);

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
            draggingId={draggingId}
            dragOverId={dragOverId}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
          />
        </div>
      </div>

      {showCelebration && percent === 100 && (
        <CelebrationOverlay
          completedCount={completed}
          totalCount={total}
          dateTime={celebrationTime}
          onStartNew={() => {
            setTodos([]);
            setShowCelebration(false);
          }}
          onClose={() => setShowCelebration(false)}
        />
      )}
    </section>
  );
}

export default TodoDashboard;
