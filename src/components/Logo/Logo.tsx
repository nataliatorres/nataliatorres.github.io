import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LogoTag = 'img' | 'a'

type LogoProps<T extends LogoTag> = {
    type: LogoTag
    styles: string
    src: T extends 'img' ? string : never
    alt: T extends 'img' ? string : never
    href: T extends 'a' ? string : never
    icon: T extends 'a' ? string : never
}

const Logo = <T extends LogoTag>({ type, styles, src, alt, href, icon }: LogoProps<T>) => {
    return (
        type === 'img' ? (
            <img className={styles} src={src} alt={alt} />
        ) : (
        <a href={href} target="_blank"> <FontAwesomeIcon icon={icon} className={styles}/> </a>
        )
    )
}

export default Logo