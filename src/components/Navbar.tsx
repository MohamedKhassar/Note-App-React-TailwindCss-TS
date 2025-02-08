import { User } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
    const [showLogout,setShowLogout]=useState(false)
    const ref = useRef<HTMLDivElement>(null);
    
    const handleClickOutside=(e:MouseEvent)=>{
        if(ref.current &&!ref.current.contains(e.target as Node)){
            setShowLogout(false)
        }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);    return (
        <div className="px-9 py-5 shadow-xl flex justify-between items-center">
            <div className="flex items-center flex-wrap gap-4">
                <img className="size-8" src="/assets/logo.svg" alt="" />
                <h1 className="text-3xl text-[#007DFC] font-bold">NotePulse</h1>
            </div>
            <div ref={ref} className="relative">
                <button onClick={()=>setShowLogout(prev=>!prev)}  className="text-sky-900 cursor-pointer bg-sky-200/70 outline-none p-3 hover:bg-sky-200 active:scale-75 transition-all duration-200 rounded-full">
                <User />
                </button>
                <div className={`absolute bg-sky-200/70 p-4 right-0 mt-2 rounded-md backdrop-blur-md space-y-3 ${showLogout?"opacity-100 blur-none scale-100":"blur-md opacity-0 scale-90"} transition-all duration-300`}>
                <p className="capitalize text-sky-900 text-lg font-bold text-nowrap">mohamed khassar</p>
                    <button className="bg-red-200 text-red-900 px-5 py-2 rounded cursor-pointer font-semibold capitalize hover:bg-red-300 duration-200">logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar