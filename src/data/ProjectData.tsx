import packageApi from '@/assets/images/projects/responseApi.png';
import { Project } from '@/types/Projects';
import { SiPhp } from "react-icons/si";
import letsImun from '@/assets/images/projects/letsImun.png';
import { FaLaravel } from 'react-icons/fa';

const ProjectData: Project[] = [
    {
        id: 1,
        title: 'Package Composer API Response',
        year: '2024-08',
        description: 'This a package library for help you manage your API response',
        url: 'https://github.com/MRizki28/MRizki28-ApiResponse',
        img: packageApi,
        techStack: [
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            }
        ]
    },
    {
        id: 2,
        title: 'Lets Imun',
        year: '2024-06',
        description: 'This a backoffice for lets imun app, and i make a API for mobile apps',
        url: '#',
        img:letsImun,
        techStack: [
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            }
        ]
    }
]

export default ProjectData;