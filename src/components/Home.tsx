import { Notebook, Plus, XCircle } from "lucide-react"
import Navbar from "./Navbar"
import { useState } from "react";
import { notes } from "../data";
import NoteCard from "./NoteCard";
import CreateForm from "./CreateForm";
import SearchComponent from "./SearchComponent";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(notes.sort((a, b) => {
        if (a.pinned && !b.pinned) {
            return -1; // `a` comes before `b`
        } else if (!a.pinned && b.pinned) {
            return 1; // `b` comes before `a`
        } else {
            return 0; // no change in order
        }
    }))

    const filterData = (search: string) => {
        const filteredData = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase()) || note.tags.find((t) => t.toLowerCase().includes(search.toLowerCase())) || search === "pinned" && note.pinned ||search === "stared" && note.isFavorite)
        setData(filteredData)
    }
    return (
        <>
            <Navbar />
            <div className="container my-16">
                <h1 className="text-center md:text-5xl text-2xl font-bold capitalize text-sky-800">write what's in your mind</h1>
                <div className="mt-16">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mx-2">
                        <SearchComponent filterData={filterData} />
                        <button onClick={() => setIsOpen(true)} className="btn btn-dark-primary !h-12">create <Plus /></button>
                    </div>
                </div>
                <hr className="my-6 text-sky-600 border rounded-2xl" />
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-3 px-3">
                    {
                        data.length > 0 ?
                            data.map(({ backgroundColor, textColor, content, title, pinned, isFavorite, date, tags }, key) =>
                                <NoteCard key={key} backgroundColor={backgroundColor} textColor={textColor} content={content} title={title} pinned={pinned} isFavorite={isFavorite} tags={tags} date={date} />
                            )
                            :
                            <div className="flex flex-col justify-center items-center col-span-12 relative">
                                <div className="relative">
                                    <Notebook className="size-96 -rotate-12 text-sky-700" />
                                    <XCircle className="size-20 absolute left-0 top-5 fill-red-800 text-red-400" />
                                </div>
                            </div>
                    }
                </div>
                <CreateForm isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    )
}

export default Home