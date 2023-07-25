import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" style={{height:"80vh"}}>
        <h1 className="text-2xl font-extrabold uppercase">Sign up</h1>
        <input type="text" id="hero-field" name="userName" className="w-72 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your first name' />
        <input type="text" id="hero-field" name="userName" className="w-72 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your last name' />
        <input type="text" id="hero-field" name="userName" className="w-72 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your email' />
        <input type="password" id="hero-field" name="password" className="w-72 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your password' />
        <Link className="text-indigo-500" href={"/login"}>I have a account.</Link>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-72 flex items-center justify-center uppercase">Sign up</button>
    </div>
  )
}

export default SignUp