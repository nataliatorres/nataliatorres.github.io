import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LogoTag = 'img' | 'a' | 'icon'

type ImgLogoProps = {
    src: string
    alt: string
    loading: string
    styles: string
}

const ImgLogo = ({ src, alt, loading, styles }: ImgLogoProps) => (
    <img className={styles} src={src} alt={alt} loading={loading}/>
)

type IconLogoProps = {
    icon: string
    styles: string
}

const IconLogo = ({ icon, styles }: IconLogoProps) => (
    <FontAwesomeIcon icon={icon} className={styles} />
)

type LinkLogoProps = {
    href: string
    icon: string
    styles: string
}

const LinkLogo = ({ href, icon,styles }: LinkLogoProps) => (
    <a href={href} target="_blank">
        <FontAwesomeIcon icon={icon} className={styles}/>
    </a>
)

type LogoType = 'img' | 'icon' | 'link'

type LogoProps =
| ({ type: 'img' } & ImgLogoProps)
| ({ type: 'icon' } & IconLogoProps)
| ({ type: 'link' } & LinkLogoProps)

const Logo = (props: LogoProps) => {
    switch (props.type) {
        case 'img':
            return <ImgLogo src={props.src} alt={props.alt} loading={props.loading} styles ={props.styles} />
        case 'icon':
            return <IconLogo icon={props.icon} styles={props.styles} />
        case 'link':
            return <LinkLogo href={props.href} icon={props.icon} styles={props.styles} />
    }
}

export default Logo