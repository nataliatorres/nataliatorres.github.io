export type ProjectCard = {
    title: string
    stack: string[]
    description: string
    image: string
    icon?: string
}

const projects: ProjectCard[] = [
    {
        title: "Eco-Commerce Platform",
        stack: ["PHP", "Drupal", "REST APIs", "MySQL"],
        description: "E-commerce platform built for Australian market.",
        image: "/images/eco-commerce.png",
        icon: "🛍️"
    },
    {
        title: "Digital Asset Manager",
        stack: ["React", "JavaScript ES6+", "Figma"],
        description: "Digital asset portal for content-rich platforms.",
        image: "/images/digital-asset.png",
        icon: "📁"
    }
]