import Logo from '../Logo/Logo'
import Title from '../Title/Title'

const MySkills = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full mt-6 py-9 px-6 rounded-4xl border-4 border-[#909560] min-h-152.5">
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-js' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-css3-alt' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>CSS 3</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-sass' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>Saas</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-html5' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>HTML 5</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-react' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>React</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-tailwind-css' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>Tailwind</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-typescript' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-php' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>PHP</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-solid fa-cloud' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>REST APIs</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-wordpress-simple' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>Wordpress</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-drupal' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>Drupal</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-git-alt' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115' />
                <p className='text-2xl text-[#4F5030] font-semibold'>Git</p>
            </div>
        </div>
    )
}

export default MySkills