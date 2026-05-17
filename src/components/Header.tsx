import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

type NavItem = {
  to: string;
  label: string;
};

type HeaderProps = {
  brandText?: string;
  items?: readonly NavItem[];
};

export default function Header({
  brandText = "TypeScript Projects",
  items = [],
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-[#ffffff]">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <NavLink to="/" className="group inline-flex items-center">
          <span className="text-sm font-semibold tracking-tight text-[#111111] group-hover:text-[#2563eb] sm:text-base">
            {brandText}
          </span>
        </NavLink>

        <div className="flex items-center gap-1.5">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-[#111111] px-3 py-2 text-sm font-medium text-[#ffffff] shadow-sm"
                  : "rounded-xl px-3 py-2 text-sm font-medium text-[#111111] hover:bg-[#f7f7f7]"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="https://github.com/qafaraz/react-typescript-projects"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-3 py-2 text-sm font-medium text-[#111111] shadow-sm hover:border-[#d6d6d6] hover:text-[#2563eb]"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="h-4 w-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
