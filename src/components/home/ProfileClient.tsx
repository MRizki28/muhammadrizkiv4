'use client';

import Image from 'next/image';
import rizkiProfile from '@/assets/profile1.webp';
import { useState } from 'react';
import Techdata from '@/data/TechData';

export default function ProfileClient() {
    const [showMore, setShowMore] = useState(false);

    const visibleTech = showMore ? Techdata : Techdata.slice(0, 3);

    const handleShowMore = () => {
        setShowMore(!showMore);
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
                            priority={true}
                            fetchPriority='high'
                            className="object-cover object-center sm:rounded-lg " style={{ height: '-webkit-fill-available' }}
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
                            {visibleTech.map((item, index) => (
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
                    <div className='mt-4'>
                        <ul className="flex flex-row ml-0  justify-start">
                            <li className="flex flex-row items-center  mr-4 mb-2">
                                <a href="https://linkedin.com/in/mrizki28" className="transition duration-200 ease-in-out flex flex-row items-center text-black dark:text-white hover:text-red-600 dark:hover:text-red-600" title="Muhammad Rizki Linkedin" target="_blank" rel="noopener noreferrer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                                </a>
                            </li>
                            <li className="flex flex-row items-center  mr-4 mb-2">
                                <a href="https://www.github.com/MRizki28/" className="transition duration-200 ease-in-out flex flex-row items-center text-black dark:text-white hover:text-red-600 dark:hover:text-red-600" title="Muhammad Rizki github" target="_blank" rel="noopener noreferrer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                </a>
                            </li>
                            <li className="flex flex-row items-center  mr-4 mb-2">
                                <a href="https://instagram.com/m_rizkii28" className="transition duration-200 ease-in-out flex flex-row items-center text-black dark:text-white hover:text-red-600 dark:hover:text-red-600" title="Muhammad Rizki github" target="_blank" rel="noopener noreferrer" >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-light max-w-screen-xl">Hey there! I&apos;m Muhammad Rizki. I work as a full-time software engineer. In my free time I do open source. Most of my open source
                    project
                    focuses on one thing – to help people learn. You can see it in my <a href="https://github.com/MRizki28?tab=repositories" className="font-bold  text-black dark:text-white" target="_blank" rel="noopener noreferrer">repo</a>  if you want to test and use it for your project</p>
            </div>
        </>

    );
}
