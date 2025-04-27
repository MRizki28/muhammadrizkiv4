import packageApi from '@/assets/images/projects/responseApi.png';
import { Project } from '@/types/Projects';
import { SiPhp, SiTypescript } from "react-icons/si";
import letsImun from '@/assets/images/projects/letsImun.png';
import { FaLaravel } from 'react-icons/fa';
import rMessage from '@/assets/images/projects/Rmessage.png';
import rDailyMart from '@/assets/images/projects/rdailymart.png';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import pos from '@/assets/images/projects/kasir.png';
import { DiCodeigniter, DiJqueryLogo } from 'react-icons/di';
import simak from '@/assets/images/projects/arsip1.png';
import burger from '@/assets/images/projects/burgerkapten.png';
import homify from '@/assets/images/projects/homify.png';
import theblue from '@/assets/images/projects/theblue.png';
import becdex from '@/assets/images/projects/becdex.png';
import eskincare from '@/assets/images/projects/e-skincare.png';
import bpr from '@/assets/images/projects/bpr.png';
import portal from '@/assets/images/projects/portal.png';

const ProjectData: Project[] = [
    {
        id: 1,
        title: 'Package Composer API Response',
        year: '2024-08',
        description: 'This a package library for help you manage your API response',
        url_source_code: 'https://packagist.org/packages/mrizki28/handler-api-response',
        url_demo: 'https://github.com/MRizki28/MRizki28-ApiResponse',
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
        description: 'This is the backoffice of the Lets Immun application where this system is responsible for managing child immunization data and the system is responsible for providing services for notifications used by mobile apps',
        url_source_code: '#',
        url_demo: '#',
        img:letsImun,
        techStack: [
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            },
            {
                name: 'Firebase',
                icon: <IoLogoFirebase style={{ fontSize: '24px', color: 'orange' }}></IoLogoFirebase>
            },
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
        ]
    },
    {
        id: 3,
        title: 'RMessage',
        year: '2024-04',
        description: 'Rmessage is a simple chat app project built with the aim of understanding websocket',
        url_source_code: 'https://github.com/MRizki28/Chat-App',
        url_demo: '#',
        img:rMessage,
        techStack: [
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            },
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
        ]
    },
    {
        id: 4,
        title: 'R daily mart',
        year: '2024-04',
        description: 'Rdaily mart is a supermarket platform that was built with the aim of providing the information the public needs.',
        url_source_code: 'https://github.com/MRizki28/R-Daily-Mart',
        url_demo: 'https://rdaily-market.vercel.app',
        img:rDailyMart,
        techStack: [
            {
                name: 'ReactJs',
                icon: <FaReact style={{ fontSize: '24px', color: '#61DAFB' }} />
            },
            {
                name: 'Tailwinds',
                icon: <RiTailwindCssFill style={{ fontSize: '24px', color: '#3B82F6' }} />
            },
            {
                name: 'Typscript',
                icon: <SiTypescript style={{ fontSize: '24px', color: '#3B82F6' }} />
            }
        ]
    },
    {
        id: 4,
        title: 'POS (Point of Sale)',
        year: '2023-08',
        description: 'A POS (Point Of Sale) is a cashier application for a printing company, where I work on several features and the most impressive is finance.',
        url_source_code: '#',
        url_demo: '#',
        img:pos,
        techStack: [
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            }
        ]
    },
    {
        id: 5,
        title: 'SIMAK (Sistem Informasi Manajemen Akademik)',
        year: '2023-07',
        description: 'SIMAK is an archive management application managed by a government agency, namely Kawatuna sub-district',
        url_source_code: 'https://github.com/KKLP-DEV/kelurahan-kawatuna-l9',
        url_demo: '#',
        img:simak,
        techStack: [
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            }
        ]
    },
    {
        id: 6,
        title: 'Burger king clone',
        year: '2023-09',
        description: 'Testing a Burger King page clone using React JS and Tailwinds',
        url_source_code: 'https://github.com/MRizki28/fe-burger-kings',
        url_demo: 'https://burger-kapten.vercel.app/',
        img:burger,
        techStack: [
            {
                name: 'ReactJs',
                icon: <FaReact style={{ fontSize: '24px', color: '#61DAFB' }} />
            },
            {
                name: 'Tailwinds',
                icon: <RiTailwindCssFill style={{ fontSize: '24px', color: '#3B82F6' }} />
            },
            {
                name: 'Javascript',
                icon: <IoLogoJavascript style={{ fontSize: '24px', color: '#F7DF1E' }} />
            },
        ]
    },
    {
        id: 7,
        title: 'HomifyId',
        year: '2024-01',
        description: 'Homifyid a platform for information house',
        url_source_code: 'https://github.com/MRizki28/fe-burger-kings',
        url_demo: 'https://homifyid.vercel.app/',
        img:homify,
        techStack: [
            {
                name: 'ReactJs',
                icon: <FaReact style={{ fontSize: '24px', color: '#61DAFB' }} />
            },
            {
                name: 'Tailwinds',
                icon: <RiTailwindCssFill style={{ fontSize: '24px', color: '#3B82F6' }} />
            },
            {
                name: 'Javascript',
                icon: <IoLogoJavascript style={{ fontSize: '24px', color: '#F7DF1E' }} />
            },
        ]
    },
    {
        id: 8,
        title: 'Backoffice The blue economist',
        year: '2023-06',
        description: 'The blue economist is a membership platform specialized in the global maritime sector, In the Blue Economist project, I, as the backend, am responsible for providing the API needed by the frontend.',
        url_source_code: '#',
        url_demo: 'https://theblueeconomist.org',
        img:theblue,
        techStack: [
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            }
        ]
    },
    {
        id: 9,
        title: 'Becdex',
        year: '2023-05',
        description: 'The blue economist is a membership platform specialized in the global maritime sector, In the Blue Economist project, I, as the backend, am responsible for providing the API needed by the frontend.',
        url_source_code: '#',
        url_demo: 'https://theblueeconomist.org',
        img:becdex,
        techStack: [
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Codegniter',
                icon: <DiCodeigniter style={{ fontSize: '24px', color: 'red' }} />
            }
        ]
    },
    {
        id: 10,
        title: 'E market skincare',
        year: '2024-07',
        description: 'E market skincare is a marketplace platform that accommodates all registered distributors. where distributors can offer their products directly through this platform',
        url_source_code: 'https://github.com/MRizki28/e-market-skincare',
        url_demo: '#',
        img:eskincare,
        techStack: [
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            },
            {
                name: 'ReactJs',
                icon: <FaReact style={{ fontSize: '24px', color: '#61DAFB' }} />
            },
            {
                name: 'Tailwinds',
                icon: <RiTailwindCssFill style={{ fontSize: '24px', color: '#3B82F6' }} />
            },
            {
                name: 'Javascript',
                icon: <IoLogoJavascript style={{ fontSize: '24px', color: '#F7DF1E' }} />
            },
        ]
    },
    {
        id: 11,
        title: 'BPR Palu Anugerah Company Profile',
        year: '2025-02',
        description: 'Company profile website for BPR Palu Anugerah, a bank in Palu City, Central Sulawesi',
        url_source_code: '#',
        url_demo: 'https://bprpaluanugerah.co.id',
        img:bpr,
        techStack: [
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            },
            {
                name: 'ReactJs',
                icon: <FaReact style={{ fontSize: '24px', color: '#61DAFB' }} />
            },
            {
                name: 'Tailwinds',
                icon: <RiTailwindCssFill style={{ fontSize: '24px', color: '#3B82F6' }} />
            },
            {
                name: 'Javascript',
                icon: <IoLogoJavascript style={{ fontSize: '24px', color: '#F7DF1E' }} />
            },
            {
                name: 'Typescript',
                icon: <SiTypescript style={{ fontSize: '24px', color: '#3B82F6' }} />
            }
        ]
    },
    {
        id: 12,
        title: 'Portal BPR Palu Anugerah',
        year: '2025-03',
        description: 'Portal BPR Palu Anugerah is a portal for BPR Palu Anugerah, a bank in Palu City, Central Sulawesi',
        url_source_code: '#',
        url_demo: '#',
        img:portal,
        techStack: [
            {
                name: 'Jquery',
                icon: <DiJqueryLogo style={{ fontSize: '24px', color: '#0769AD' }} />
            },
            {
                name: 'PHP',
                icon: <SiPhp style={{ fontSize: '24px', color: '#8993be' }} />
            },
            {
                name: 'Laravel',
                icon: <FaLaravel style={{ fontSize: '24px', color: 'red' }} />
            },
            {
                name: 'Javascript',
                icon: <IoLogoJavascript style={{ fontSize: '24px', color: '#F7DF1E' }} />
            },
        ]
    },

]

export default ProjectData;