import React , {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import {navLinks} from '../constants'
import {menu,close} from '../assets'
import {styles} from '../Styles'
import App from '../App'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className = {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-40 bg-primary `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>

        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive(""); 
          window.scrollTo(0,0)}}
        >
          
          <p className='text-white text-[24px] font-bold cursor-pointer mr-10 flex'>
            Midhun &nbsp;
            <span className='sm:block hidden text-white'>Chandran</span></p>
        </Link>

        <ul className='gap-10 list-none sm:flex  flex-row hidden '>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
              <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer`}
              onClick={() => {setActive(nav.title);
                setToggle(!toggle);
              }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
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