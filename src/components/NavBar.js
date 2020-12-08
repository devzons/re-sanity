import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
  return (
    <header className='bg-gray-700'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink to='/' activeClassName='text-white' className='inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-400 text-4xl font-bold cursive tracing-widest uppercase'>
            Devzons
          </NavLink>
          <NavLink to='/post' activeClassName='text-gray-100 bg-gray-800' className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400'>
            Blog Posts
          </NavLink>
          <NavLink to='/project' activeClassName='text-gray-100 bg-gray-800' className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400'>
            Projects
          </NavLink>
          <NavLink to='/about' activeClassName='text-gray-100 bg-gray-800' className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400'>
            About Me
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon url='https://twitter.com' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
          <SocialIcon url='https://youtube.com' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
          <SocialIcon url='https://linkedin.com' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </header>
  )
}

export default NavBar
