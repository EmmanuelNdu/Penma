import React from 'react'
import logo from '../assets/Logo.png'
import { navItems } from '../constants';

const Navbar = () => {

  // const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen( !mobileDrawerOpen);
    }

  return (
    <nav className='sticky top-0 z-50 py-3  bg-white'>
        <div className='container px-4 mx-auto relative text-sm text-black'>
          <div className='flex justify-between items-center text-base'>
            <div className='flex items-center flex-shrink-0'>
              <img className="h-15 w-20 ml-4" src={logo} alt="logo" />
              <ul className='hidden lg:flex ml-14 space-x-12 font font-medium'>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar