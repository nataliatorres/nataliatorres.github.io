import Logo from '../Logo/Logo'
import Title from '../Title/Title'

const MySkills = () => {
    return (
        <div className='flex flex-col mx-auto mt-6 w-[60%] py-9 bg-[#4F5030] rounded-4xl gap-5'>
            <div className='flex justify-center text-[#DFD3BD] mx-auto'>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-js' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>JavaScript</p>
                </div>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-css3-alt' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>CSS 3</p>
                </div>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-sass' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>Saas</p>
                </div>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-html5' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>HTML 5</p>
                </div>
            </div>
            <div className='flex justify-center text-[#DFD3BD] mx-auto'>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-react' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>React</p>
                </div>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-tailwind-css' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>Tailwind</p>
                </div>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-typescript' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>TypeScript</p>
                </div>
            </div>
            <div className='flex justify-center text-[#DFD3BD] mx-auto'>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-php' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>PHP</p>
                </div>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-solid fa-cloud' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>REST APIs</p>
                </div>
            </div>
            <div className='flex justify-center text-[#DFD3BD] mx-auto'>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-wordpress-simple' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>Wordpress</p>
                </div>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-drupal' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>Drupal</p>
                </div>
            </div>
            <div className='flex justify-center text-[#DFD3BD] mx-auto'>
                <div>
                    <Logo type='icon' src='' alt='' href='' icon='fa-brands fa-git-alt' styles='fa-6x text-[#DFD3BD] transition-transform duration-400 ease-in-out hover:scale-115' />
                    <p className='text-2xl'>Git</p>
                </div>
            </div>
        </div>
    )
}

export default MySkills