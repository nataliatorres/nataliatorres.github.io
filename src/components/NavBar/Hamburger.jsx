const Hamburger = ({ isOpen }) => {
  return (
    <div className='flex justify-around flex-col flex-nowrap w-8 h-8 z-10 md:hidden'>
      <span className={`w-8 h-1 rounded-xl bg-[#DFD3BD] origin-[1px] transition-all duration-300 ease-linear ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
      <span className={`w-8 h-1 rounded-xl bg-[#DFD3BD] origin-[1px] transition-all duration-300 ease-linear ${isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`} />
      <span className={`w-8 h-1 rounded-xl bg-[#DFD3BD] origin-[1px] transition-all duration-300 ease-linear ${isOpen ? '-rotate-45' : 'rotate-0'}`} />
    </div>
  )
}

export default Hamburger
