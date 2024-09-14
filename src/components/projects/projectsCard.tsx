'use client';
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import ProjectData from "@/data/ProjectData";
import helper from "@/helper/helper";
import { useEffect, useState } from "react";
import { Project } from "@/types/Projects";
import { FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ProjectsCard() {
    const [result, setResult] = useState<Project[]>([]);
    const getData = () => {
        const data = ProjectData;
        const sortByNewData = data.sort((a, b) => {
            return new Date(b.year).getTime() - new Date(a.year).getTime();
        })

        setResult(sortByNewData);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {result.map((project, index) => (
                    <div key={index} className="border rounded-lg flex flex-col justify-between dark:border-gray-600">
                        <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
                            <Image src={project.img} alt={project.title} width={640} height={500} className="w-full h-60 object-cover object-top border-b-2" placeholder="blur"
                                blurDataURL={project.img.blurDataURL}></Image>
                        </div>
                        <div className="flex flex-col flex-1  p-3">
                            <div className="flex-1">
                                <h2 className="capitalize">{project.title}</h2>
                                <div className="flex items-center space-x-2 text-xs mt-1 text-blue-500">
                                    <SlCalender /><span>{helper.formatYear(project.year)}</span>
                                </div>
                                <p className="text-sm mt-1">{project.description}</p>
                                <div className="capitalize font-light text-sm flex flex-row mt-3">
                                    <div className="flex flex-row space-x-2">
                                        {project.techStack.map((tech, index) => (
                                            <div key={index} className="flex items-center space-x-1">
                                                {tech.icon}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex flex-row items-center mt-auto">
                                    {project.url_demo !== '#' && (
                                        <a
                                            href={project.url_demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-4 bg-white text-black py-2 px-3 rounded shadow-sm border border-solid border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300 space-x-2"
                                        >
                                            <FaPlay className="text-[12px]" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                    {project.url_source_code !== '#' && (
                                        <a
                                            href={project.url_source_code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-4 bg-white text-black py-2 px-3 rounded shadow-sm border border-solid border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300 space-x-2"
                                        >
                                            <FaGithub className="text-[12px]" />
                                            <span>Source Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
