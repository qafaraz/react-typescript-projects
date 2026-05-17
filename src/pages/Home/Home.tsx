import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

type ProjectCard = {
  title: string;
  description: string;
  href: string;
  sourceHref: string;
};

const heroPills: readonly string[] = [
  "React 19",
  "TypeScript",
  "React Router v7",
  "Tailwind CSS v4",
  "Vite",
  "Axios",
];

const projects: readonly ProjectCard[] = [
  {
    title: "Todo List",
    description:
      "Add tasks, mark them done, and filter by status. Saved locally in the browser.",
    href: "/projects/todo-list",
    sourceHref:
      "https://github.com/qafaraz/react-typescript-projects/tree/main/src/projects/todo-list",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[600px] px-6 pb-8 pt-10">
        <p className="mb-4 font-mono text-[12px] text-[#aaa]">
          qafaraz / react-typescript-projects
        </p>
        <h1 className="mb-[10px] text-[22px] font-semibold text-[#111]">
          React TypeScript Projects
        </h1>
        <p className="mb-5 text-[13px] leading-[1.7] text-[#999]">
          A collection of frontend projects built to practice clean architecture,
          component patterns, and real API integration with TypeScript.
        </p>

        <div className="mb-4 flex flex-wrap gap-[6px]">
          {heroPills.map((pill) => (
            <span
              key={pill}
              className="rounded-[20px] bg-[#f5f5f5] px-[10px] py-[4px] font-mono text-[11px] text-[#555]"
            >
              {pill}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/qafaraz/react-typescript-projects"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[6px] font-mono text-[12px] text-[#aaa] no-underline transition-colors duration-150 hover:text-[#111]"
        >
          <FaGithub className="h-[13px] w-[13px]" aria-hidden="true" />
          github.com/qafaraz/react-typescript-projects
        </a>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pb-14 pt-6">
        <section>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-semibold tracking-tight text-[#111111]">
              Projects
            </h2>
          </div>

          {projects.length === 0 ? (
            <p className="py-8 text-center font-mono text-[13px] text-[#ccc]">
              No projects yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.href}
                  className="flex items-start justify-between gap-3 rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-5 shadow-sm transition hover:border-[#d6d6d6] hover:shadow-md"
                >
                  <Link to={project.href} className="group min-w-0 flex-1 no-underline">
                    <h3 className="text-sm font-semibold text-[#111111] group-hover:text-[#2563eb]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#111111]/70">
                      {project.description}
                    </p>
                  </Link>
                  <a
                    href={project.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                    title="View source on GitHub"
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-[#aaa] no-underline transition hover:bg-[#f5f5f5] hover:text-[#111111]"
                  >
                    source
                    <HiOutlineExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
