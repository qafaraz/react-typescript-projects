import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

type FooterProps = {
  owner?: string;
};

export default function Footer({
  owner = "qafaraz",
}: FooterProps) {
  return (
    <footer className="w-full border-t border-t-[#e5e5e5] bg-[#ffffff]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="text-[13px] text-[#111111]">
          <a
            href={`https://github.com/${owner}`}
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:text-[#2563eb]"
          >
            {owner}
          </a>
          <span> · 2026</span>
        </div>

        <div className="flex items-center gap-[14px] text-[#111111]">
          <FaReact
            className="h-4 w-4 cursor-pointer transition-colors duration-300 hover:text-[#2563eb]"
            aria-hidden="true"
          />
          <SiTypescript
            className="h-4 w-4 cursor-pointer transition-colors duration-300 hover:text-[#2563eb]"
            aria-hidden="true"
          />
          <SiVite
            className="h-4 w-4 cursor-pointer transition-colors duration-300 hover:text-[#2563eb]"
            aria-hidden="true"
          />
          <SiTailwindcss
            className="h-4 w-4 cursor-pointer transition-colors duration-300 hover:text-[#2563eb]"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
}
