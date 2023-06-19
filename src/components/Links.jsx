import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/images', text: '📸 Images' },
];

const Link = () => {
  return (
    <div className='flex sm:justify-between items-center' mt-2>
      {links.map(({ url, text }) => (
        <NavLink to={url} className='m-2 mb-0' activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
          {text}
        </NavLink> 
      ))}
    </div>
  )
}

export default Link