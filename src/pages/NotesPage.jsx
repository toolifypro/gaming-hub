import { useState } from 'react'

function NotesPage() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'FPS Settings',
      text: 'Ultra performance mode enabled.',
      pinned: true
    },
    {
      id: 2,
      title: 'Raid Team',
      text: 'Prepare gear before event.',
      pinned: false
    }
  ])

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const addNote = () => {
    if (!title || !text) return

    setNotes([
      {
        id: Date.now(),
        title,
        text,
        pinned: false
      },
      ...notes
    ])

    setTitle('')
    setText('')
  }

  return (
    <div>
      <div className="glass rounded-[40px] p-8 mb-10">
        <h1 className="text-5xl font-black mb-6">
          Gaming Notes
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Note title"
            className="bg-black/30 rounded-2xl p-4 outline-none"
          />

          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Write your strategy..."
            className="bg-black/30 rounded-2xl p-4 outline-none"
          />
        </div>

        <button
          onClick={addNote}
          className="bg-cyan-400 text-black px-8 py-3 rounded-2xl font-black"
        >
          Add Note
        </button>
      </div>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
        {notes.map(note => (
          <div
            key={note.id}
            className="glass rounded-3xl p-6 break-inside-avoid border border-white/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-black">
                {note.title}
              </h3>

              {note.pinned && <span>📌</span>}
            </div>

            <p className="text-white/70 mb-6">
              {note.text}
            </p>

            <div className="flex gap-3">
              <button className="glass px-4 py-2 rounded-xl">
                Edit
              </button>

              <button className="bg-red-500/20 px-4 py-2 rounded-xl">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesPage
