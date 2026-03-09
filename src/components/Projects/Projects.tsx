import type { ProjectCard } from '../../data/projects'

type ProjectGridProps = {
    projects: ProjectCard[]
}

const ProjectCard = ({ title, stack, description, icon, href }: ProjectCard) => (

    <a href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-3 rounded-r-lg p-5 border-l-4 border-[#4F5030] bg-[#4F5030]/20 hover:border-[#CA9248] hover:bg-[#CA9248]/10 duration-200"
    >
        <div className="flex items-center gap-3">
            {icon && <span className="text-2xl">{icon}</span>}
            <h3 className="font-bold text-lg text-[#4F5030] group-hover:text-[#CA9248] duration-200">{title}</h3>
        </div>
        <p className="text-sm opacity-90 text-[#4F5030] text-left">{description}</p>
        <div className="flex gap-2 flex-wrap mt-auto">
            {stack.map(tech => (
                <span key={tech} className="text-xs bg-[#4F5030] text-[#DFD3BD] px-2 py-1 rounded-full">
                    {tech}
                </span>
            ))}
        </div>
    </a>
)

const ProjectGrid = ({ projects }: ProjectGridProps) => (
    <div id='projects' className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 px-10">
        {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
    </div>
)

export default ProjectGrid