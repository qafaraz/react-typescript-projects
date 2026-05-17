import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import TodoListApp from "../../projects/todo-list/TodoListApp";

const SOURCE_URL =
  "https://github.com/qafaraz/react-typescript-projects/tree/main/src/projects/todo-list";

export default function TodoListPage() {
  return (
    <div className="mx-auto w-full max-w-lg px-6 pb-14 pt-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <Link
            to="/"
            className="mb-3 inline-block font-mono text-[12px] text-[#aaa] no-underline transition hover:text-[#111111]"
          >
            ← back
          </Link>
          <h1 className="text-lg font-semibold tracking-tight text-[#111111]">
            Todo List
          </h1>
          <p className="mt-1 text-sm leading-6 text-[#111111]/60">
            Tasks are stored in your browser — nothing leaves this page.
          </p>
        </div>
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#e5e5e5] px-3 py-2 font-mono text-[11px] text-[#888] no-underline transition hover:border-[#d6d6d6] hover:text-[#111111]"
        >
          <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
          source
        </a>
      </div>

      <TodoListApp />
    </div>
  );
}
