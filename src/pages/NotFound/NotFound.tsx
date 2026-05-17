import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
      <div className="space-y-3">
        <p className="text-6xl font-semibold tracking-tight text-[#111111] sm:text-7xl">
          404
        </p>
        <p className="text-sm text-[#111111]/70 sm:text-base">Page not found</p>
      </div>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
      >
        Back to home
      </Link>
    </div>
  );
}
