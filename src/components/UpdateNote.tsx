import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react"
import { Note } from "../data"
import { Plus, X } from "lucide-react"
import DeleteNote from "./DeleteNote"

const UpdateNote = ({ selectedNote, setSelectedNote, isOpen, setIsOpen, setData }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>, setSelectedNote: Dispatch<SetStateAction<Note | undefined>>, selectedNote: Note | undefined, setData: Dispatch<SetStateAction<Note[]>> }) => {
    const [tag, setTag] = useState("")
    const ref = useRef<HTMLDivElement>(null)
    const removeTag = (tag: string) => {
        if (selectedNote) {
            setSelectedNote({ ...selectedNote, tags: selectedNote.tags.filter(item => item !== tag) })
        }
    }
    const addTag = () => {
        if (tag && selectedNote) {
            setSelectedNote({ ...selectedNote, tags: [...selectedNote.tags, tag] })
            setTag("")
            document.querySelector("#tags")?.classList.remove("invalid-input")
        } else {
            document.querySelector("#tags")?.classList.add("invalid-input")
        }
    }
    const handelSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!selectedNote?.title || !selectedNote?.content || !selectedNote?.tags.length) {
            if (!selectedNote?.title) {
                document.querySelector("#title")?.classList.add("invalid-input")
            }
            if (!selectedNote?.content) {
                document.querySelector("#content")?.classList.add("invalid-input")
            }
            if (!selectedNote?.tags.length) {
                document.querySelector("#tags")?.classList.add("invalid-input")
            }
        } else {
            setData((prev) => {
                return prev.map((item) => {
                    if (item.id === selectedNote.id) {
                        // Update the matching note
                        return {
                            ...item,
                            title: selectedNote.title,
                            content: selectedNote.content,
                            tags: selectedNote.tags,
                        };
                    }
                    // Return the item as-is if it doesn't match
                    return item;
                });
            });
            setSelectedNote(undefined)
            setIsOpen(false)
        }
    }

    const closeAndReset = () => {
        setSelectedNote(undefined)
        document.querySelectorAll(".invalid-input").forEach(item => item?.classList.remove("invalid-input"))
        setIsOpen(false)
    }
    const clickOutSide = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            closeAndReset()
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', clickOutSide);
        return () => {
            document.removeEventListener('mousedown', clickOutSide);
        };
    }, []);
    return (
        <>
            {
                <div className={` bg-black/20 items-center backdrop-blur-3xl fixed h-screen w-full top-0 left-0 ${!isOpen && !selectedNote ? "invisible opacity-0 delay-300" : ""} flex justify-center`}>
                    <div ref={ref} className={`bg-white px-5 py-9 rounded-2xl w-[30rem]  mx-4 relative ${isOpen ? "" : "opacity-0 scale-90"} transition-all duration-300`}>
                        <h1 className="text-4xl font-bold text-center text-sky-900">Update a Note</h1>
                        <form action="" className="mt-9 space-y-4">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="title" className="capitalize text-sky-900 font-medium w-fit">title<b className="text-red-600 mx-1">*</b></label>
                                <input value={selectedNote?.title} onChange={(e) => selectedNote && setSelectedNote({ ...selectedNote, title: e.target.value })} id="title" type="text" className={`bg-sky-200 rounded-md p-3 outline-none h-10 duration-200 ${selectedNote?.title && "bg-sky-200"}`} placeholder="" required />

                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="content" className="capitalize text-sky-900 font-medium w-fit">content<b className="text-red-600 mx-1">*</b></label>
                                <textarea value={selectedNote?.content} onChange={(e) => selectedNote && setSelectedNote({ ...selectedNote, content: e.target.value })} id="content" className={`bg-sky-200 rounded-md p-3 outline-none min-h-16 max-h-56 duration-200 ${selectedNote?.content && "bg-sky-200"}`} ></textarea>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="tags" className="capitalize text-sky-900 font-medium w-fit">tags<b className="text-red-600 mx-1">*</b></label>
                                <div className="flex items-center relative">
                                    <input value={tag} onChange={(e) => selectedNote && setTag(e.target.value)} type="text" id="tags" className={`bg-sky-200 rounded-md p-3 outline-none h-10 w-full ${tag && "bg-sky-200"}  transition-all duration-300`} />
                                    <Plus className="absolute right-2 text-sky-900 cursor-pointer" onClick={addTag} />
                                </div>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {
                                        selectedNote?.tags.map((item, key) => (
                                            <div key={key} className="flex text-sm items-center bg-sky-200 py-1 px-4 text-sky-800 rounded-2xl w-fit gap-x-3">
                                                <p className="capitalize">#{item}</p>
                                                <X onClick={() => removeTag(item)} className="size-4 cursor-pointer" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <button onClick={handelSubmit} className="btn-dark-primary btn !w-full !h-13 text-lg">update</button>
                                {selectedNote&&<DeleteNote closeAndReset={closeAndReset} id={selectedNote.id} setData={setData} />}
                            </div>
                        </form>
                        <X onClick={closeAndReset} className="absolute right-5 top-5  bg-sky-200 text-sky-800 p-0.5 rounded-2xl size-7 cursor-pointer" />
                    </div>
                </div>
            }
        </>
    )
}

export default UpdateNote