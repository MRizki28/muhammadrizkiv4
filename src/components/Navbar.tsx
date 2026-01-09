'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdSunny } from 'react-icons/md';
import logo from '@/assets/icon.png';
import logo2 from '@/assets/white.png'
import { IoMoonOutline } from 'react-icons/io5';

export default function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    const { theme } = useTheme()
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
            <IoMoonOutline
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
        <header className="grid grid-cols-3 px-6 sm:px-12 py-6 font-sans bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
            <div className="mb-[2px] ">
                <Link
                    href="/"
                    aria-current="page"
                    className="transition text-black duration-200 ease-in-out flex flex-row items-center hover:text-red-700 font-extrabold text-sm no-underline tracking-widest uppercase dark:text-white dark:hover:text-red-700"
                >
                    <Image
                        src={theme === 'dark' ? logo2 : logo}
                        alt="Logo"
                        width={32}
                        height={32}
                        className="text-center dark:text-white"
                    />
                </Link>
            </div>

            <nav className="flex items-center justify-center">
                <ul className="flex items-center justify-center ">
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

            </nav>
            <div className="ml-auto">{renderThemeIcon()}</div>

        </header>
    );
}
