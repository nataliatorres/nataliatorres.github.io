type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TitleProps = {
    title: string
    type: HeadingTag
}

const Title = ({title, type: Tag}: TitleProps) => {
    return (
        <Tag>{title}</Tag>
    )
}

export default Title