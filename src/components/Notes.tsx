import { Notebook, XCircle } from "lucide-react"
import { Note } from "../data"
import NoteCard from "./NoteCard"
import { Dispatch, SetStateAction, useState } from "react"
import UpdateNote from "./UpdateNote"

const Notes = ({ data, setData }: { data: Note[], setData: Dispatch<SetStateAction<Note[]>> }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedNote, setSelectedNote] = useState<Note | undefined>()
    const editPinnedAndFavorite = (id:number, type: "pinned" | "favorite", value: boolean) => {
        try {

            if (type === "pinned") {
                setData(data.map((note) => note.id === id ? { ...note, pinned: value } : note))
            } else if (type === "favorite") {
                setData(data.map((note) => note.id === id ? { ...note, isFavorite: value } : note))
            }
        } catch (err) {
            console.log(err)
        } finally {

            setData(prev => prev.sort((a, b) => {
                if (a.pinned && !b.pinned) {
                    return -1; // `a` comes before `b`
                } else if (!a.pinned && b.pinned) {
                    return 1; // `b` comes before `a`
                } else {
                    return 0; // no change in order
                }
            }))
        }
    }

    const selectNote = (id: number) => {
        setIsOpen(true)
        setSelectedNote(data.find(note => note.id === id))
    }
    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-3 px-3">
            {
                data.length > 0 ?
                    data.map((note, key) =>
                        <NoteCard onClick={() => selectNote(note.id)} aria-label="Sample Note Card" editPinnedAndFavorite={editPinnedAndFavorite} key={key} note={note} />
                    )
                    :
                    <div className="flex flex-col justify-center items-center col-span-12 relative">
                        <div className="relative">
                            <Notebook className="size-96 -rotate-12 text-sky-700" />
                            <XCircle className="size-20 absolute left-0 top-5 fill-red-800 text-red-400" />
                        </div>
                    </div>
            }
            <UpdateNote setData={setData} isOpen={isOpen} selectedNote={selectedNote} setSelectedNote={setSelectedNote} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Notes