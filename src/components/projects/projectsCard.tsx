'use client';
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import ProjectData from "@/data/ProjectData";
import helper from "@/helper/helper";
import { useEffect, useState } from "react";
import { Project } from "@/types/Projects";

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
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {result.map((project, index) => (
                    <div key={index} className="border rounded-lg flex flex-col justify-between dark:border-gray-600">
                        <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
                            <Image src={project.img} alt={project.title} width={640} height={500} className="w-full h-48 object-cover object-top border-b-2" placeholder="blur"
                                blurDataURL={project.img.blurDataURL}></Image>
                        </div>
                        <div className="py-2 px-3 flex-1 justify-center h-full">
                            <div className="h-full bg-yellow-10">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
