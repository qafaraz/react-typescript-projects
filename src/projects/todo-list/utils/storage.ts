import type { Todo } from "../types/todo";

const STORAGE_KEY = "todo-list";

export function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isTodo);
  } catch {
    return [];
  }
}

export function saveTodos(todos: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function isTodo(value: unknown): value is Todo {
  if (typeof value !== "object" || value === null) return false;

  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.text === "string" &&
    typeof item.completed === "boolean" &&
    typeof item.createdAt === "number"
  );
}
