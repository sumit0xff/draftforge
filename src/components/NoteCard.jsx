import { Star, Trash2 } from "lucide-react";

export default function NoteCard({
  note,
  setNotes,
  notes,
  deleteNote,
}) {
  return (
    <div className="rounded-2xl bg-zinc-800 p-5 shadow-lg hover:scale-[1.02] transition">

      <input
        className="mb-3 w-full bg-transparent text-xl font-bold text-white outline-none"
        value={note.title}
        onChange={(e) =>
          setNotes(
            notes.map((n) =>
              n.id === note.id
                ? { ...n, title: e.target.value }
                : n
            )
          )
        }
      />

      <p className="mb-4 text-sm text-zinc-400">
        {note.createdAt}
      </p>

      <div className="flex justify-between">

        <button>
          {note.favorite ? (
            <Star fill="gold" color="gold" />
          ) : (
            <Star />
          )}
        </button>

        <button onClick={() => deleteNote(note.id)}>
          <Trash2 />
        </button>

      </div>

    </div>
  );
}