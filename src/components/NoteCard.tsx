import { PenBox, Pin, Star } from "lucide-react"
import { Note } from "../data"

type NoteCardProps = {
    note: Note
    editPinnedAndFavorite: (id: number, type: "pinned" | "favorite", value: boolean) => void; // Add onClick to the props
} & React.HTMLAttributes<SVGElement>;
const NoteCard: React.FC<NoteCardProps> = ({ note, editPinnedAndFavorite, ...rest }) => {
    return (
        <div className={`p-6 transition-all duration-300 rounded-xl cursor-pointer flex flex-col justify-between gap-4`} style={{ backgroundColor: note.backgroundColor, color: note.textColor }}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">{note.title}</h1>
                <div className="flex items-center gap-x-6 group">
                    <PenBox {...rest} className={`transition-all cursor-pointer  duration-300 hover:rotate-0`} />
                    <Pin onClick={() => editPinnedAndFavorite(note.id, "pinned", !note.pinned)} className={`text-sky-400 ${note.pinned ? "fill-sky-400 hover:fill-none hover:rotate-45" : "rotate-45 hover:fill-sky-400"}  transition-all cursor-pointer  duration-300 hover:rotate-0`} />
                    <Star onClick={() => editPinnedAndFavorite(note.id, "favorite", !note.isFavorite)} className={`text-amber-400 ${note.isFavorite ? "fill-amber-400" : "hover:fill-amber-400"}  transition-all cursor-pointer duration-300`} />
                </div>
            </div>
            <p className="text-pretty text-left">{note.content}</p>
            <div className="flex text-nowrap justify-between text-xs items-center">
                <div className="flex gap-x-2 flex-wrap gap-3 items-center">
                    {note.tags.slice(0, 2).map((tag: string, key: number) => (
                        <span key={key} className="text-sm text-sky-200 bg-sky-900 rounded-full px-2.5 py-2 cursor-pointer hover:bg-sky-950 hover:text-sky-100 transition-all capitalize">#{tag}</span>
                    ))}
                    {note.tags.length > 2 && <span className="text-sm text-sky-200 bg-sky-900 rounded-full px-2.5 py-2 cursor-pointer hover:bg-sky-950 hover:text-sky-100 transition-all">#more...</span>}

                </div>
                <span className="font-bold">{note.date.toLocaleDateString()}</span>
            </div>
        </div>
    )
}

export default NoteCard