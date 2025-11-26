'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdSunny } from 'react-icons/md';

export default function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleThemeToggle = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const renderThemeIcon = () => {
        if (!mounted) return <MdSunny className="text-gray-700 text-3xl cursor-pointer" />;
        return resolvedTheme === 'dark' ? (
            <MdDarkMode
                onClick={handleThemeToggle}
                className="text-3xl cursor-pointer text-white transition-colors duration-200"
            />
        ) : (
            <MdSunny
                onClick={handleThemeToggle}
                className="text-gray-700 text-3xl cursor-pointer transition-colors duration-200"
            />
        );
    };

    return (
        <header className="flex flex-row items-center px-6 sm:px-12 py-6 font-sans bg-white dark:bg-gray-800 ">
            <div className="mr-6 mb-[2px]">
                <Link
                    href="/"
                    aria-current="page"
                    className="transition text-black duration-200 ease-in-out flex flex-row items-center hover:text-red-700 font-extrabold text-sm no-underline tracking-widest uppercase dark:text-white dark:hover:text-red-700"
                >
                    MRizki
                </Link>
            </div>

            <nav className="flex flex-grow items-center">
                <ul className="flex items-center m-0">
                    <li className="ml-5 mb-0">
                        <Link
                            href="/"
                            className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline dark:text-white dark:hover:text-red-700"
                        >
                            About
                        </Link>
                    </li>
                    <li className="ml-5 mb-0">
                        <Link
                            href="/projects"
                            className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline dark:text-white dark:hover:text-red-700"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>

                <div className="ml-auto">{renderThemeIcon()}</div>
            </nav>
        </header>
    );
}
