import Navbar from "@/components/Navbar";
import ProjectsCard from "@/components/projects/projectsCard";

export default function Projects() {
    return (
        <main className="max-w-screen-xl self-stretch m-auto w-full">
            <Navbar></Navbar>
            <article className="px-6 sm:px-12 py-6">
                <ProjectsCard></ProjectsCard>
            </article>
        </main>
    );
}