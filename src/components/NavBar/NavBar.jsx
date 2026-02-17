const NavBar = () => {
    const navItems = ["Home", "About", "Projects", "Contact"];

    return (
        <header className="top-0 relative border-solid z-20 bg-[#4F5030]">
            <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between px-8 lg:px-6 py-6 lg:py-4">
                <a className="flex text-center font-medium sm:text-lg" href="">Natalia Torres Rojas</a>
                <nav className="sm:text-lg">
                {
                    navItems.map((item, index) => (
                        <a className="pr-[5px]" href="" key={index}>{item}</a>
                    ))
                }
                </nav>
            </div>
        </header>
    )
}

export default NavBar;