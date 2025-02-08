import { Pin, Star } from "lucide-react"
import { Note } from "../data"

const NoteCard = ({ backgroundColor, textColor, content, title, pinned, isFavorite, date, tags }:Note) => {
    return (
        <div className={`p-6 hover:opacity-90 transition-all duration-300 rounded-xl cursor-pointer flex flex-col justify-between gap-4`} style={{ backgroundColor, color: textColor }}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="flex items-center gap-x-6">
                    <Pin className={`text-sky-400 ${pinned ? "fill-sky-400 hover:fill-none hover:rotate-45" : "rotate-45 hover:fill-sky-400"}  transition-all cursor-pointer  duration-300 hover:rotate-0`} />
                    <Star className={`text-amber-400 ${isFavorite ? "fill-amber-400" : "hover:fill-amber-400"}  transition-all cursor-pointer duration-300`} />
                </div>
            </div>
            <p className="text-pretty text-left">{content}</p>
            <div className="flex text-nowrap justify-between text-xs items-center">
                <div className="flex gap-x-2 flex-wrap gap-3">
                    {tags.map((tag:string, key:number) => (
                        <span key={key} className="text-sm text-sky-200 bg-sky-900 rounded-full px-2.5 py-2 cursor-pointer hover:bg-sky-950 hover:text-sky-100 transition-all">#{tag}</span>
                    ))}
                </div>
                <span className="font-bold">{date}</span>
            </div>
        </div>
    )
}

export default NoteCard