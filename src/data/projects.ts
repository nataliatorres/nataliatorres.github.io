export type ProjectCard = {
    title: string
    stack: string[]
    description: string
    href: string
    icon?: string
}


export const projects: ProjectCard[] = [
    {
        title: "Online Master's Degrees",
        stack: ["WordPress", "PHP", "JavaScript", "Sass"],
        description: "Guide to online master's degree programs across business, counseling, education and more.",
        href: "https://www.onlinemastersdegrees.org/",
        icon: "🎓"
    },
    {
        title: "Online Colleges",
        stack: ["WordPress", "PHP", "JavaScript", "Sass"],
        description: "Resource helping students find and compare online colleges and degree programs across the US.",
        href: "https://www.onlinecolleges.me/",
        icon: "🏫"
    },
    {
        title: "EduMed",
        stack: ["WordPress", "PHP", "JavaScript", "Sass"],
        description: "Leading resource for nursing and allied health students looking for schools and career guidance.",
        href: "https://www.edumed.org/",
        icon: "🏥"
    },
    {
        title: "PhDs.me",
        stack: ["WordPress", "PHP", "JavaScript", "Sass"],
        description: "Directory helping students find and compare PhD and doctorate programs online.",
        href: "https://www.phds.me/",
        icon: "📚"
    },
    {
        title: "Public Service Degrees",
        stack: ["WordPress", "PHP", "JavaScript", "Sass"],
        description: "Guide to degrees in public service, social work, and making a difference through higher education.",
        href: "https://www.publicservicedegrees.org/",
        icon: "🤝"
    },
    {
        title: "PROS Connect",
        stack: ["Drupal", "PHP", "JavaScript", "REST APIs", "Jira"],
        description: "Self-service support portal for PROS customers to access forums, tickets and documentation.",
        href: "http://connect.pros.com/",
        icon: "⚙️"
    },
    {
        title: "Tic Tac Toe",
        stack: ["React", "Tailwind"],
        description: "Tic tac toe game with confetti celebration on win.",
        href: "https://nataliatorres.github.io/tictactoe/",
        icon: "🎉"
    }
]