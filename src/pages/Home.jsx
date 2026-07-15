
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("notes");
  return savedNotes ? JSON.parse(savedNotes) : [];
});

const [search, setSearch] = useState("");


useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);
  const addNote = () => {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        title: "New Note",
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-zinc-900 text-white">
        <Sidebar />

        <main className="flex-1 p-6">
          <button onClick={addNote}>+ New Note</button>

          <h1>All Notes</h1>

          {notes.length === 0 && <p>No notes yet.</p>}

          {notes
  .filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  )
  .map((note) => (
            <div key={note.id}>
              <input
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
              <button onClick={() => deleteNote(note.id)}>
                Delete
              </button>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}