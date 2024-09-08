'use client';

import Image from 'next/image';
import rizkiProfile from '@/assets/rizki3.png';
import { useState } from 'react';
import Techdata from '@/data/TechData';

export default function Profile() {
    const techData = Techdata;

    const [showMore, setShowMore] = useState(false);
    const [showTech, setShowTech] = useState(techData.slice(0, 3));

    const handleShowMore = () => {
        setShowMore(!showMore);
        if (showMore) {
            setShowTech(techData.slice(0, 3));
        } else {
            setShowTech(techData);
        }
    }

    return (
        <>
            <div className="flex flex-col items-center sm:flex-row mb-12 sm:items-center">
                <div className="mr-0 mb-6 sm:mr-6 sm:mb-0">
                    <div className="w-64 h-64 rounded-full overflow-hidden">
                        <Image
                            src={rizkiProfile}
                            alt="Muhammad Rizki"
                            width={1920}
                            height={1080}
                            placeholder="blur"
                            blurDataURL={rizkiProfile.blurDataURL}
                            className="object-cover object-center sm:rounded-lg"
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center sm:items-start'>
                    <div>
                        <div className='md:ml-0 text-center'>
                            <h1 className="text-3xl mb-1 uppercase font-extrabold">
                                Muhammad Rizki
                            </h1>
                        </div>
                        <div className="mb-3 text-center font-light text-gray-500 flex flex-row items-center justify-center md:flex md:justify-start">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-1 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            <span>Software Engineer</span>
                        </div>
                        <div className="mb-3 font-light">
                            <span className=" text-center sm:text-left mb-0">Open Source Project feature on GitHub</span>
                        </div>
                        <div className="mb-3 font-light text-gray-500 flex flex-row items-center justify-center md:flex md:justify-start">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-1 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>Palu, Indonesian 🇮🇩</span>
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-row justify-center flex-wrap ml-0'>
                            {showTech.map((item, index) => (
                                <li key={index} className="flex  items-center justify-center last:mr-0 mr-2 mb-2">
                                    <span className="inline-block bg-gray-200 dark:bg-slate-500 rounded-sm px-2 py-1 text-xs font-normal last:mr-0 ">{item}</span>
                                </li>
                            ))}
                            <li className='flex flex-row items-center mb-2'>
                                <a href="#" onClick={handleShowMore} className='transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light'>
                                    {showMore ? '-less' : '+more'}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-light max-w-screen-xl">Hey there! I&aposm Muhammad Rizki. I work as a full-time software engineer. In my free time I do open source. Most of my open source
                    project
                    focuses on one thing – to help people learn. You can see it in my <a href="https://github.com/MRizki28?tab=repositories" className="font-bold  text-black" target="_blank" rel="noopener noreferrer">repo</a>  if you want to test and use it for your project</p>
            </div>
        </>

    );
}
