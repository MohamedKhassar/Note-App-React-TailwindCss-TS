import { Delete, Pin, Star } from "lucide-react"
import { useState } from "react"

const SearchComponent = ({ filterData }: { filterData: (search: string) => void }) => {
    const [reset, setReset] = useState(false)
    const HandelSearch = (search: string) => {
        filterData(search)
        setReset(true)
    }
    const HandelReset = () => {
        filterData("")
        setReset(false)
    }
    return (
        <div className={`relative flex items-center md:flex-row md:gap-0 gap-3 flex-col ${reset ? "max-md:h-56" : "max-md:h-40"}`}>
            <input onChange={(e) => HandelSearch(e.target.value)} placeholder="Search..." className="ring-inset ring-2 rounded-2xl ring-zinc-500 px-5 focus:ring-sky-600 lg:h-full h-14 max-sm:h-20 outline-none w-full" type="search" />
            <div className=" md:absolute md:end-0 md:flex grid grid-cols-1 md:gap-0 gap-3 h-full max-md:w-full">
                <div className="relative group flex justify-center  max-md:!w-full">
                    <button onClick={() => HandelSearch("pinned")} className="btn-dark-primary btn md:!rounded-none md:!border-r-2 md:!border-r-sky-400 max-md:!w-full ">
                        <Pin className="text-sky-500 fill-sky-500 size-4" />
                    </button>
                    <span className=" absolute top-full my-1 invisible group-hover:visible group-hover:opacity-100 opacity-0 blur-md group-hover:blur-none !transition-all !duration-500 p-4 text-nowrap btn btn-dark-primary z-30">filter by Pinned notes</span>
                </div>
                <div className="relative group flex justify-center  max-md:!w-full">
                    <button onClick={() => HandelSearch("stared")} className={`btn-dark-primary btn md:!rounded-l-none ${reset && "md:!rounded-none"} !w-full`}>
                        <Star className="text-amber-500 fill-amber-500 size-4" />
                    </button>
                    <span className=" absolute top-full my-1 invisible group-hover:visible group-hover:opacity-100 opacity-0 blur-md group-hover:blur-none !transition-all !duration-500 p-4 text-nowrap btn btn-dark-primary z-20">filter by Stared notes</span>
                </div>
                {
                    reset &&
                    <div className="relative group flex justify-center max-md:!w-full">
                        <button onClick={HandelReset} className={` bg-red-900 btn md:!rounded-l-none !w-full !border-red-900 ${reset && "md:!border-l-2 !border-l-red-400"}`}>
                            <Delete className="text-red-500 size-4" />
                        </button>
                        <span className=" absolute top-full my-1 invisible group-hover:visible group-hover:opacity-100 opacity-0 blur-md group-hover:blur-none transition-all duration-300 p-4 text-nowrap btn bg-red-500 text-red-100">reset</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchComponent