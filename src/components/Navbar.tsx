import Link from "next/link";
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
    return (
        <header className="flex flex-row items-center px-6 sm:px-12 py-6 font-sans">
            <div className="mr-6 mb-[2px]">
                <Link href="/" aria-current="page" className="transition text-black duration-200 ease-in-out flex flex-row items-center hover:text-red-700 font-extrabold text-sm no-underline tracking-widest uppercase">MRizki</Link>
            </div>
            <nav className="flex flex-grow">
                <ul className="flex items-center m-0">
                    <li className="ml-5 mb-0">
                        <Link href="/" aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline">About</Link>
                    </li>
                    <li className="ml-5 mb-0">
                        <Link href="/" aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline">Project</Link>
                    </li>
                </ul>
                <div className="ml-auto">
                    <MdDarkMode className="text-gray-700 text-3xl cursor-pointer hover:bg-black hover:rounded-full  hover:text-white" />
                </div>

            </nav>
        </header>
    )
}