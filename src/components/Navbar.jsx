import { Search, Plus } from "lucide-react";

export default function Navbar({ search, setSearch }) {
  return (
    <header className="h-20 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-white">
          All Notes
        </h1>
        <p className="text-sm text-zinc-500">
          Manage your thoughts
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search notes..."
            className="w-80 rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500"
          />

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500 transition">
          <Plus size={18} />
          New
        </button>

      </div>

    </header>
  );
}