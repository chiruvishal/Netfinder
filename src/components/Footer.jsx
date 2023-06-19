import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({darkTheme, setDarkTheme}) => {
  return (
    <div className={darkTheme ? 'dark' : ''}>

<div class="flex items-end w-full min-h-screen bg-white dark:border-gray-700 dark:bg-gray-50 dark:text-gray-900">

<footer class="w-full text-gray-700 bg-gray-100 body-font dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black">
    <div  
        class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <Link to='/'>
                <p className='rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900'>
                    NetFinder 🔎
                </p>
            </Link>
            </a>
            <p class="mt-2 text-sm text-gray-500 dark:text-white">Design, Code and Ship!</p>
            <div class="mt-4">
                <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
        <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font dark:text-white">About</h2>
                <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Company</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Careers</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Blog</a>
                    </li>
                </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font dark:text-white">Support</h2>
                <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Contact Support</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Help Resources</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Release Updates</a>
                    </li>
                </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font dark:text-white">Platform
                </h2>
                <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Terms &amp; Privacy</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Pricing</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">FAQ</a>
                    </li>
                </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font dark:text-white">Contact</h2>
                <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Send a Message</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">Request a Quote</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900 dark:text-white">+123-456-7890</a>
                    </li>
                </nav>
            </div>
        </div>
    </div>
    
</footer>

</div>
</div>
  )
}

export default Footer