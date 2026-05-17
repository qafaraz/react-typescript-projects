import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { Todo, TodoFilter, TodoId } from "../types/todo";
import { loadTodos, saveTodos } from "../utils/storage";

type State = {
  todos: Todo[];
  filter: TodoFilter;
};

type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: TodoId }
  | { type: "remove"; id: TodoId }
  | { type: "set_filter"; filter: TodoFilter }
  | { type: "clear_completed" }
  | { type: "hydrate"; todos: Todo[] };

function createTodo(text: string): Todo {
  return {
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now(),
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { ...state, todos: action.todos };
    case "add": {
      const text = action.text.trim();
      if (!text) return state;
      return { ...state, todos: [createTodo(text), ...state.todos] };
    }
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "set_filter":
      return { ...state, filter: action.filter };
    case "clear_completed":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
}

const initialState: State = {
  todos: [],
  filter: "all",
};

export function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "hydrate", todos: loadTodos() });
  }, []);

  useEffect(() => {
    saveTodos(state.todos);
  }, [state.todos]);

  const visibleTodos = useMemo(() => {
    switch (state.filter) {
      case "active":
        return state.todos.filter((todo) => !todo.completed);
      case "completed":
        return state.todos.filter((todo) => todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  const activeCount = useMemo(
    () => state.todos.filter((todo) => !todo.completed).length,
    [state.todos],
  );

  const hasCompleted = useMemo(
    () => state.todos.some((todo) => todo.completed),
    [state.todos],
  );

  const addTodo = useCallback((text: string) => {
    dispatch({ type: "add", text });
  }, []);

  const toggleTodo = useCallback((id: TodoId) => {
    dispatch({ type: "toggle", id });
  }, []);

  const removeTodo = useCallback((id: TodoId) => {
    dispatch({ type: "remove", id });
  }, []);

  const setFilter = useCallback((filter: TodoFilter) => {
    dispatch({ type: "set_filter", filter });
  }, []);

  const clearCompleted = useCallback(() => {
    dispatch({ type: "clear_completed" });
  }, []);

  return {
    todos: visibleTodos,
    filter: state.filter,
    activeCount,
    hasCompleted,
    isEmpty: state.todos.length === 0,
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter,
    clearCompleted,
  };
}
