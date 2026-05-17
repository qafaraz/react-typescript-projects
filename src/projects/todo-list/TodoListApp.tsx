import { type ComponentProps, useState } from "react";
import { useTodos } from "./hooks/useTodos";
import type { TodoFilter } from "./types/todo";

const FILTERS: readonly { value: TodoFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Done" },
];

export default function TodoListApp() {
  const {
    todos,
    filter,
    activeCount,
    hasCompleted,
    isEmpty,
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter,
    clearCompleted,
  } = useTodos();

  const [input, setInput] = useState("");

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = (
    e,
  ) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    addTodo(text);
    setInput("");
  };

  const emptyMessage =
    filter === "completed"
      ? "No completed tasks yet."
      : filter === "active"
        ? "Nothing left to do — nice."
        : "Your list is empty. Add something above.";

  return (
    <div className="rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-5 shadow-sm">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          autoComplete="off"
          className="min-w-0 flex-1 rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-4 py-2.5 text-sm text-[#111111] outline-none transition placeholder:text-[#bbb] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/15"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="shrink-0 rounded-xl bg-[#111111] px-4 py-2.5 text-sm font-medium text-[#ffffff] transition hover:bg-[#333333] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Add
        </button>
      </form>

      {isEmpty ? (
        <p className="mt-6 text-center font-mono text-[12px] text-[#ccc]">
          Your list is empty. Add something above.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          <div
            className="flex gap-1 rounded-xl bg-[#f5f5f5] p-1"
            role="group"
            aria-label="Filter tasks"
          >
            {FILTERS.map((item) => {
              const isActive = filter === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  className={`rounded-lg px-3 py-1.5 font-mono text-[11px] transition ${
                    isActive
                      ? "bg-[#ffffff] text-[#111111] shadow-sm"
                      : "text-[#888] hover:text-[#111111]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {todos.length === 0 ? (
            <p className="py-10 text-center font-mono text-[12px] text-[#ccc]">
              {emptyMessage}
            </p>
          ) : (
            <ul className="divide-y divide-[#f0f0f0]">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="group flex items-center gap-3 border-b border-[#f0f0f0] px-1 py-3 last:border-b-0"
                >
                  <input
                    id={`todo-${todo.id}`}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-4 w-4 shrink-0 cursor-pointer rounded border-[#d6d6d6] text-[#2563eb] focus:ring-[#2563eb]/30"
                  />
                  <label
                    htmlFor={`todo-${todo.id}`}
                    className={`min-w-0 flex-1 cursor-pointer text-sm leading-snug ${
                      todo.completed
                        ? "text-[#aaa] line-through"
                        : "text-[#111111]"
                    }`}
                  >
                    {todo.text}
                  </label>
                  <button
                    type="button"
                    onClick={() => removeTodo(todo.id)}
                    className="shrink-0 rounded-lg px-2 py-1 font-mono text-[11px] text-[#ccc] opacity-0 transition hover:bg-[#f5f5f5] hover:text-[#111111] group-hover:opacity-100 focus:opacity-100"
                    aria-label={`Remove "${todo.text}"`}
                  >
                    remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center justify-between px-1 pt-3">
            <span className="font-mono text-[11px] text-[#aaa]">
              {activeCount === 1 ? "1 item left" : `${activeCount} items left`}
            </span>
            {hasCompleted && (
              <button
                type="button"
                onClick={clearCompleted}
                className="font-mono text-[11px] text-[#aaa] transition hover:text-[#111111]"
              >
                clear completed
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
