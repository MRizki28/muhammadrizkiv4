'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdSunny } from 'react-icons/md';
import { IoMoonOutline, IoLanguage } from 'react-icons/io5';
import logo from '@/assets/icon.png';
import logo2 from '@/assets/white.png';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const { setTheme, resolvedTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    const t = useTranslations('nav');
    const locale = useLocale();     
    const router = useRouter();
    const pathname = usePathname();

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

    const handleLanguageClick = (lang: 'en' | 'id') => {
        const pathWithoutLocale = pathname.replace(/^\/(en|id)/, '') || '/';
        const newPath = `/${lang}${pathWithoutLocale}`;
        router.push(newPath);
        setShowLanguage(false);
    };

    return (
        <header className="grid grid-cols-3 px-6 sm:px-12 py-6 font-sans bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
            <div className="mb-[2px]">
                <Link
                    href={`/${locale}/`} 
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
                <ul className="flex items-center justify-center">
                    <li className="ml-5 mb-0">
                        <Link
                            href={`/${locale}/`} 
                            className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline dark:text-white dark:hover:text-red-700"
                        >
                            {t('about')}
                        </Link>
                    </li>
                    <li className="ml-5 mb-0">
                        <Link
                            href={`/${locale}/projects`} 
                            className="transition duration-200 ease-in-out flex flex-row items-center text-black hover:text-red-600 uppercase text-xs font-bold no-underline dark:text-white dark:hover:text-red-700"
                        >
                            {t('projects')}
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="ml-auto flex items-center space-x-4 relative">
                <IoLanguage
                    size={24}
                    className="cursor-pointer text-black dark:text-white hover:text-red-600 dark:hover:text-red-700 transition-colors"
                    onClick={() => setShowLanguage(!showLanguage)}
                />

                {showLanguage && (
                    <ul className="absolute top-10 right-0 z-50 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded shadow-lg min-w-[80px]">
                        <li
                            onClick={() => handleLanguageClick('en')}
                            className={`p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white ${locale === 'en' ? 'bg-gray-200 dark:bg-gray-600 font-bold' : ''
                                }`}
                        >
                            EN 🇬🇧
                        </li>
                        <li
                            onClick={() => handleLanguageClick('id')}
                            className={`p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white ${locale === 'id' ? 'bg-gray-200 dark:bg-gray-600 font-bold' : ''
                                }`}
                        >
                            ID 🇮🇩
                        </li>
                    </ul>
                )}

                {renderThemeIcon()}
            </div>
        </header>
    );
}
