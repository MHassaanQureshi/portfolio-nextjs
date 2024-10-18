import Link from "next/link"
export default function Navbar(){
    return(
        <div className="flex w-100 h-15 flex-row justify-between align-middle  text-white text-2xl p-4">
            <h1 className="text-red-600 font-bold text-3xl p-3">HQ</h1>
            <ul className="flex w-50 align-middle gap-12 text-2xl justify-center p-3">
                <li ><Link href="" className=" hover:border-b-2 border-red-700">About</Link></li>
                <li><Link href="" className=" hover:border-b-2 border-red-700">Skills</Link></li>
                <li><Link href="" className=" hover:border-b-2 border-red-700">Projects</Link></li>
                <li><Link href="" className=" hover:border-b-2 border-red-700">Contact</Link></li>
            </ul>
        </div>
    )
}