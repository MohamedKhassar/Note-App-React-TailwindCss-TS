import { Dispatch, FormEvent, SetStateAction } from "react"
import { Note } from "../data"

const DeleteNote = ({ setData, id, closeAndReset }: { setData: Dispatch<SetStateAction<Note[]>>, id: number, closeAndReset: ()=>void }) => {
  const handleDelete = (e:FormEvent) => {
    e.preventDefault();
    setData(prev => prev.filter((note) => note.id !== id))
    closeAndReset()
  }
  return (
    <button onClick={handleDelete} className="btn-dark-delete btn !w-full !h-13 text-lg">delete</button>
  )
}

export default DeleteNote