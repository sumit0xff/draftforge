export default function Navbar({search, setSearch}) {
    return (
        <nav className="flex items-center justify-between border-b border-zinc-700 bg-zinc-950 px-6 py-4">
            <div>
                <h1>DraftForge</h1>
            </div>

            <form className="w-full max-w-md">
                <input
  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-zinc-100 placeholder:text-zinc-500 outline-none"
  type="search"
  placeholder="Search notes..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
                <button type="submit">Search</button>
            </form>
        </nav>
    )
}