const NavBar = () => {
        const items = ["Home", "About", "Projects", "Contact"];

    return (
        <header className="sticky top-0 relative border-b border-solid z-20 bg-aliceblue">
            <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between px-8 lg:px-6 py-6 lg:py-4">
                <a className="flex text-center font-medium sm:text-lg" href="">NataliaTR</a>
                <nav className="sm:text-lg">
                {
                    items.map((item, index) => (
                        <a className="pr-[5px]" href="" key={index}>{item}</a>
                    ))
                }
                </nav>
            </div>
        </header>
    )
}

export default NavBar;