import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
      <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to='/'>
                <p className=' text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900'>
                    NetFinder 🔎
                </p>
            </Link>
            <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-3 rounded-2xl shadow-blue-400 shadow-md border-b-4 hover border-b border-blue-200 hover:shadow-sm transition-all duration-500'>
                {darkTheme ? 'Light 💡' : 'Dark 🌙'}
            </button>
        </div>
        <Search />
      </div>
  )
}

export default Navbar
