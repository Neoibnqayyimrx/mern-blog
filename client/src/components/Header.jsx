
import { Button, Navbar, NavbarLink, TextInput } from 'flowbite-react'
import { Link } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-4 py-2 bg-gradient-to-r from-green-500 via-purple-500 to-cyan-500 rounded-lg text-gray-500'>Abu Hanifa's</span>
            Blog
        </Link>
        <form>
            <TextInput 
               type='text'
               placeholder='Search...'
               rightIcon={AiOutlineSearch}
               className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10' color='gray' pill>
            <AiOutlineSearch />
        </Button>

        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
            <Button gradientDuoTone='greenToBlue'>
                Sign In
            </Button>
            </Link>
        </div>
        <Navbar.Collapse>
            <Navbar.Link>
                <Link to='/'>
                  Home
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to='/about'>
                  About
                </Link>
            </Navbar.Link>
            <Navbar.Link>
                <Link to='/projects'>
                  Project
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
