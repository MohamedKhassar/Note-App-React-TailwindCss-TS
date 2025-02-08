import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Signin = () => {
  const [showPass, setShowPass] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 h-screen">
      <div className="flex items-center flex-wrap gap-4">
        <img className="size-8" src="/assets/logo.svg" alt="" />
        <h1 className="text-3xl text-[#007DFC] font-bold">NotePulse</h1>
      </div>
      <div className="shadow-2xl space-y-7 rounded-2xl bg-white  border border-zinc-200 lg:w-1/3 md:w-1/2 min-w-[400px] py-7 px-5 ">
          <h1 className="text-3xl font-bold text-sky-800 capitalize text-center">sign in</h1>
        <div className="space-y-4 w-full">
          <div className="relative flex items-center w-full">
            <input className="px-4 h-14 pt-2 w-full outline-none ring-inset border-b-2  rounded-t-xl bg-slate-400/50 peer focus:border-sky-500 placeholder-shown:border-gray-500 border-sky-500" type="email" id="" name="email" required placeholder="" />
            <label htmlFor="email" className="absolute ms-3 capitalize text-sky-700 font-semibold text-sm scale-75 -translate-y-4 peer-focus:-translate-y-4 peer-focus:z-10 peer-placeholder-shown:z-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-sky-700 duration-300 peer-focus:scale-75  tracking-wide ">email</label>
          </div>
          <div className="relative flex items-center">
            <div className="relative flex items-center w-full z-10">
              <input
                className="px-4 h-14 pt-2 w-full outline-none ring-inset border-b-2 rounded-t-xl bg-slate-400/50 peer/pass focus:border-sky-500 placeholder-shown:border-gray-500 border-sky-500" type={showPass ? "text" : "password"}
                id="password"
                name="password"
                required
                placeholder=""
              />
              <button onClick={() => setShowPass(prev => !prev)} className="absolute right-4 text-sky-900 cursor-pointer bg-sky-200/70 outline-none p-1.5 rounded-2xl">
                {
                  showPass ?
                    <EyeClosed />
                    :
                    <Eye />
                }
              </button>
              <label htmlFor="password" className="left-0 absolute ms-3 capitalize text-sky-700 font-semibold text-sm scale-75 -translate-y-4 z-10 peer-focus/pass:-translate-y-4 peer-focus/pass:z-10 peer-placeholder-shown/pass:z-0 peer-placeholder-shown/pass:translate-y-0 peer-placeholder-shown/pass:scale-100 peer-placeholder-shown/pass:text-sky-700 duration-300 peer-focus/pass:scale-75 tracking-wide peer-invalid:ring-red-700">password</label>
            </div>
          </div>
          <button className="border-2 border-sky-800 hover:border-sky-800 w-full rounded-xl md:py-3 py-1.5 capitalize font-semibold text-lg text-sky-950 bg-white hover:bg-sky-800 hover:text-sky-100 cursor-pointer duration-500">sign in</button>
          <div className="relative flex items-center text-sm text-gray-500 gap-x-1">
            <p>
              I don't have an account
            </p>
            <Link className="font-semibold underline text-sky-700" to={"/sign-up"}>Sign-up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin