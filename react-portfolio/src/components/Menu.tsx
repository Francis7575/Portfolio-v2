import ProjectsIcon from '/images/icon-projects.png'
import ContactIcon from '/images/icon-user-profile.png'
import SkillsIcon from '/images/icon-skills.png'
import AboutIcon from '/images/icon-about.png'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const menuOptions = [
        { name: 'Skills', image: SkillsIcon, alt: 'Skills Icon', path: '/skills' },
        { name: 'Projects', image: ProjectsIcon, alt: 'Projects Icon', path: '/projects' },
        { name: 'Contact', image: ContactIcon, alt: 'Contact Icon', path: '/contact' },
        { name: 'About', image: AboutIcon, alt: 'About Icon', path: '/' }
    ]

    const location = useLocation()
    return (
        <nav className='nav-menu bg-menu py-4'>
            <div className='flex justify-evenly md:justify-end md:gap-16 md:mr-10 lg:mt-8 
                lg:flex-col lg:w-full'>
                {menuOptions.map((option, idx) => (
                    <ul key={idx} className='flex flex-col items-center'>
                        <Link to={option.path} className='flex flex-col items-center'>
                            <div className={`${location.pathname === option.path ? 'bg-active' : ''}`}>
                                <img src={option.image} alt={option.alt} className={`max-w-[1.7rem] cursor-pointer md:max-w-[2.2rem]  `} />
                            </div>
                            {option.name}
                        </Link>
                    </ul>
                ))}
            </div>
        </nav>
    )
}

export default Menu