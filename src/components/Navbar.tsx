'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdSunny } from 'react-icons/md';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [resolvedTheme]);

    const handleThemeToggle = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="flex flex-row items-center px-6 sm:px-12 py-6 font-sans">
            <div className="mr-6 mb-[2px]">
                <Link href="/" aria-current="page" className="transition text-black duration-200 ease-in-out flex flex-row items-center hover:text-red-700 font-extrabold text-sm no-underline tracking-widest uppercase dark:text-white dark:hover:text-red-700">
                    MRizki
                </Link>
            </div>
            <nav className="flex flex-grow">
                <ul className="flex items-center m-0">
                    <li className="ml-5 mb-0">
                        <Link href="/" aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline dark:text-white dark:hover:text-red-700">
                            About
                        </Link>
                    </li>
                    <li className="ml-5 mb-0">
                        <Link href="/projects" aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline dark:text-white dark:hover:text-red-700">
                            Projects
                        </Link>
                    </li>
                </ul>
                <div className="ml-auto">
                    {mounted && (
                        resolvedTheme === 'dark' ? (
                            <MdDarkMode
                                onClick={handleThemeToggle}
                                className="text-3xl cursor-pointer text-white"
                            />
                        ) : (
                            <MdSunny
                                onClick={handleThemeToggle}
                                className="text-gray-700 text-3xl cursor-pointer"
                            />
                        )
                    )}
                </div>
            </nav>
        </header>
    );
}