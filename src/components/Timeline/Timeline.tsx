import type { ExperienceItem } from "../../data/experience"

type TimelineProps = {
    items: ExperienceItem[]
}

const TimelineItem = ({ title, company, period, description }: ExperienceItem) => (
    <div className="flex gap-4">
        <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-[#4F5030]" /> {/* dot */}
            <div className="w-[2px] h-full bg-[#4F5030]" /> {/* line */}
        </div>
        <div className="flex flex-col gap-1 pb-8 mx-auto">
            <h3 className="font-bold">{title}</h3>
            <span className="text-sm">{company} | {period}</span>
            <p>{description}</p>
        </div>
    </div>
)

const Timeline = ({ items }: TimelineProps) => (
    <div className="flex flex-col gap-2.5">
        {items.map((item, index) => (
            <TimelineItem key={index} {...item} />
        ))}
    </div>
)

export default Timeline