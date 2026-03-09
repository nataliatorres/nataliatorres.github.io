type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TitleProps = {
    title: string
    style: string
    type: HeadingTag
}

const Title = ({title, style, type: Tag}: TitleProps) => {
    return (
        <Tag className={style}>{title}</Tag>
    )
}

export default Title