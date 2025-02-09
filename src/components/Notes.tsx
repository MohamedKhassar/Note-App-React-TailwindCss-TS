import { Notebook, XCircle } from "lucide-react"
import { Note } from "../data"
import NoteCard from "./NoteCard"
import { Dispatch, SetStateAction, useState } from "react"
import UpdateNote from "./UpdateNote"

const Notes = ({ data, setData }: { data: Note[], setData: Dispatch<SetStateAction<Note[]>> }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedNote, setSelectedNote] = useState<Note | undefined>()
    const editPinnedAndFavorite = (index: number, type: "pinned" | "favorite", value: boolean) => {
        try {

            if (type === "pinned") {
                setData(data.map((note, i) => i === index ? { ...note, pinned: value } : note))
            } else if (type === "favorite") {
                setData(data.map((note, i) => i === index ? { ...note, isFavorite: value } : note))
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

    const selectNote = (key: number) => {
        setIsOpen(true)
        setSelectedNote(data[key])
    }
    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-3 px-3">
            {
                data.length > 0 ?
                    data.map((note, key) =>
                        <NoteCard onClick={() => selectNote(key)} aria-label="Sample Note Card" index={key} editPinnedAndFavorite={editPinnedAndFavorite} key={key} note={note} />
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