import {
  House,
  Star,
  Archive,
  Trash2,
  Settings,
} from "lucide-react";

export default function Sidebar({ setFilter }) {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="mb-10 text-2xl font-bold text-white">
        DraftForge
      </h1>

      <p className="mb-3 text-xs uppercase text-zinc-500">
        Main
      </p>

      <nav className="space-y-2">
        <button
          onClick={() => setFilter("all")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white"
        >
          <House size={18} />
          All Notes
        </button>

        <button
          onClick={() => setFilter("favorites")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white"
        >
          <Star size={18} />
          Favorites
        </button>

        <button
          onClick={() => setFilter("archive")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white"
        >
          <Archive size={18} />
          Archive
        </button>

        <button
          onClick={() => setFilter("trash")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white"
        >
          <Trash2 size={18} />
          Trash
        </button>
      </nav>

      <div className="mt-16">
        <p className="mb-3 text-xs uppercase text-zinc-500">
          Settings
        </p>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white">
          <Settings size={18} />
          Settings
        </button>
      </div>
    </aside>
  );
}