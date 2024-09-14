export interface Project {
    id: number;
    title: string;
    year: string;
    description: string;
    url_source_code: string;
    url_demo: string;
    img: any;
    techStack: {
        name: string;
        icon: any;
    }[];
}
