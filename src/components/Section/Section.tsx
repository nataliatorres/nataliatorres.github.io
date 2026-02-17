type SectionProps = {
    id: string;
    title: string;
    text: string;
    imgSource: string | undefined;
}

const Section = ({ id, title, text, imgSource }: SectionProps) => {

    return (
        <div id={id} className="flex justify-center flex-wrap-reverse py-12 lg:p-12 lg:flex-nowrap text-black ">
            <div className="lg:content-center px-3.5 mt-2.5">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <div>
                <figure>
                    <img className="max-w-87.5 rounded-full" src={imgSource} alt={imgSource ? "The user avatar" : ""} />
                </figure>
            </div>
        </div>
    )
}

export default Section;