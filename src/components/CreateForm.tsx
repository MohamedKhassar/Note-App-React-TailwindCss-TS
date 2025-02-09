import { Plus, X } from "lucide-react"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { colors, Note } from "../data"

const CreateForm = ({isOpen,setIsOpen}:{isOpen:boolean,setIsOpen:Dispatch<SetStateAction<boolean>>}) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const [tag, setTag] = useState("")
    const [note, setNote] = useState<Note>({
        title: "",
        content: "",
        tags: [],
        pinned: false,
        isFavorite: false,
        date: new Date(),
        textColor: randomColor?.textColor,
        backgroundColor: randomColor?.backgroundColor,
    })
    const removeTag = (tag: string) => {
        setNote({ ...note, tags: note.tags.filter(item => item !== tag) })
    }
    const addTag = () => {
        if (tag) {
            setNote({ ...note, tags: [...note.tags, tag] })
            setTag("")
            document.querySelector("#tags")?.classList.remove("invalid-input")
        } else {
            document.querySelector("#tags")?.classList.add("invalid-input")
        }
    }

    const handelSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!note.title || !note.content || !note.tags.length) {
            if (!note.title) {
                document.querySelector("#title")?.classList.add("invalid-input")
            }
            if (!note.content) {
                document.querySelector("#content")?.classList.add("invalid-input")
            }
            if (!note.tags.length) {
                document.querySelector("#tags")?.classList.add("invalid-input")
            }
        } else {
            // notes=[...notes,]
            setNote({
                ...note, title: "",
                content: "",
                tags: [],
                textColor: randomColor.textColor,
                backgroundColor: randomColor.backgroundColor,
            })
            setIsOpen(false)
        }
    }
    return (
        <div className={` bg-black/20 items-center backdrop-blur-3xl fixed h-screen w-full top-0 left-0 ${!isOpen?"invisible opacity-0 delay-300":""} flex justify-center`}>
            <div className={`bg-white px-5 py-9 rounded-2xl w-[30rem]  mx-4 relative ${isOpen?"":"opacity-0 scale-90"} transition-all duration-300`}>
                <h1 className="text-4xl font-bold text-center text-sky-900">Create a Note</h1>
                <form onSubmit={handelSubmit} action="" className="mt-9 space-y-4">
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="title" className="capitalize text-sky-900 font-medium w-fit">title<b className="text-red-600 mx-1">*</b></label>
                        <input value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} id="title" type="text" className={`bg-sky-200 rounded-md p-3 outline-none h-10 duration-200 ${note.title && "bg-sky-200"}`} placeholder="" required />

                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="content" className="capitalize text-sky-900 font-medium w-fit">content<b className="text-red-600 mx-1">*</b></label>
                        <textarea value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} id="content" className={`bg-sky-200 rounded-md p-3 outline-none min-h-16 max-h-56 duration-200 ${note.content && "bg-sky-200"}`} ></textarea>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="tags" className="capitalize text-sky-900 font-medium w-fit">tags<b className="text-red-600 mx-1">*</b></label>
                        <div className="flex items-center relative">
                            <input value={tag} onChange={(e) => setTag(e.target.value)} type="text" id="tags" className={`bg-sky-200 rounded-md p-3 outline-none h-10 w-full ${tag && "bg-sky-200"}  transition-all duration-300`} />
                            <Plus className="absolute right-2 text-sky-900 cursor-pointer" onClick={addTag} />
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {
                                note.tags.map((item, key) => (
                                    <div key={key} className="flex text-sm items-center bg-sky-200 py-1 px-4 text-sky-800 rounded-2xl w-fit gap-x-3">
                                        <p className="capitalize">#{item}</p>
                                        <X onClick={() => removeTag(item)} className="size-4 cursor-pointer" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={handelSubmit} className="btn-dark-primary btn !w-full !h-13 text-lg">save</button>
                </form>
            <X className="absolute right-5 top-5  bg-sky-200 text-sky-800 p-0.5 rounded-2xl size-7 cursor-pointer" onClick={()=>setIsOpen(false)} />
            </div>
        </div>
    )
}

export default CreateForm