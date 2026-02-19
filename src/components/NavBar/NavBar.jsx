import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
    const navItems = ["About", "Projects", "Contact"];

    return (
        <header className="top-0 relative border-solid z-20 bg-[#4F5030]">
            <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between gap-4 duration-200 px-8 lg:px-6 py-6 lg:py-4">
                <a className="flex text-center font-medium sm:text-lg" href="">Natalia Torres Rojas</a>
                <nav className="sm:text-lg flex items-center gap-4 md:gap-5 lg:gap-2">
                    <a href="" className="md:hidden"><FontAwesomeIcon icon="fa-solid fa-bars" className="fa-2x"/></a>
                {
                    navItems.map((item, index) => (
                        <a className="relative overflow-hidden hidden md:block group" href={`#${item.toLocaleLowerCase()}`} key={index}>
                            {item}
                            <div className="absolute bottom-0 right-full group-hover:translate-x-full duration-300 h-[1.5px] w-full bg-[#CA9248]"></div>
                        </a>
                    ))
                }
                </nav>
            </div>
        </header>
    )
}

export default NavBar;