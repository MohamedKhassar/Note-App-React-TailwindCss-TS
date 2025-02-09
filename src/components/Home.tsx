import { Plus } from "lucide-react"
import Navbar from "./Navbar"
import { useState } from "react";
import { notes } from "../data";
import CreateForm from "./CreateForm";
import SearchComponent from "./SearchComponent";
import Notes from "./Notes";

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
        let filteredData;
        const searchLower = search.toLowerCase(); // Convert search term to lowercase once

        if (searchLower === "pinned" || searchLower === "stared") {
            filteredData = data.filter((note) => {
                if (searchLower === "pinned") {
                    return note.pinned;
                } else if (searchLower === "stared") {
                    return note.isFavorite;
                }
            });
        } else {
            filteredData = notes.filter((note) => {
                const matchesText =
                    note.title.toLowerCase().includes(searchLower) ||
                    note.content.toLowerCase().includes(searchLower) ||
                    note.tags.some((tag) => tag.toLowerCase().includes(searchLower));


                // Return true if any of the conditions are met
                return matchesText;
            });
        }
        if (filteredData) {
            setData(filteredData)
        }
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
                <Notes setData={setData} data={data} />
                <CreateForm data={data} setData={setData} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    )
}

export default Home