import {  ShieldCheck } from "lucide-react"


function NotFound() {
  return ( 
    <div className="w-full  min-h-[300px] flex justify-center items-center  border-2 border-black border-dashed border-opacity-60   rounded-md">
    <p className="opacity-70 font-bold text-4xl flex items-center"><ShieldCheck size={40} color="green" /> NotFound</p>
    </div>
  )
}

export default NotFound