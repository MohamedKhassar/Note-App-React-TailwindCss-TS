import { Notebook, Plus, XCircle } from "lucide-react"
import Navbar from "./Navbar"
import { useState } from "react";
import { notes } from "../data";
import NoteCard from "./NoteCard";

const Home = () => {
    const [data, setData] = useState(notes.sort((a, b) => {
        if (a.pinned && !b.pinned) {
            return -1; // `a` comes before `b`
        } else if (!a.pinned && b.pinned) {
            return 1; // `b` comes before `a`
        } else {
            return 0; // no change in order
        }
    }))
    const [search, setSearch] = useState("")

    const filterData = (search: string) => {
        setSearch(search)
        const filteredData = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase()) || note.tags.includes(search.toLowerCase()))
        setData(filteredData)
    }
    return (
        <>
            <Navbar />
            <div className="container my-16">
                <h1 className="text-center md:text-5xl text-2xl font-bold capitalize text-sky-800">write what's in your mind</h1>
                <div className="mt-16">
                    <div className="grid lg:grid-cols-2 grid-cols-1  gap-6 mx-4">
                        <div className="relative flex items-center lg:w-full">
                            <input value={search} onChange={(e) => filterData(e.target.value)} placeholder="Search..." className="ring-inset ring-2 rounded-xl ring-zinc-500 px-5 focus:ring-sky-600 h-13 w-full outline-none" type="search" />
                        </div>
                        <button className="flex items-center border rounded-2xl px-5 lg:w-fit h-14 justify-center capitalize font-semibold btn-dark-primary">create <Plus /></button>
                    </div>
                </div>
                <hr className="my-6 text-sky-600 border rounded-2xl" />
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_2fr))] gap-3 px-3">
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
            </div>
        </>
    )
}

export default Home