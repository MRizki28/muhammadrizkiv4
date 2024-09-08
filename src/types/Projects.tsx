export interface Project {
    id: number;
    title: string;
    year: string;
    description: string;
    url: string;
    img: any;
    techStack: {
        name: string;
        icon: JSX.Element;
    }[];
}
