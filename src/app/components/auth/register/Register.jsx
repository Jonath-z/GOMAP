import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div class="container px-4 max-w-6xl mx-auto my-12">
	
        <div class="w-full max-w-xl mx-auto">
            <form class="LgnForm max-w-sm mx-auto  shadow-lg bg-white rounded-sm pt-6 pb-8 mb-4 px-8">
                <img class="h-20 w-20 md:h-24 md:w-24 rounded-full mx-auto" src="https://i.ibb.co/HdX4ybd/Nice-Png-user-icon-png-1280406.png"/>
                <div class="MskForm">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm  mb-2">
                            Username
                        </label>
                        <input class="shadow apperance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm  mb-2">
                            Email
                        </label>
                        <input class="shadow apperance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" aria-required/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm mb-2">
                        Password
                        </label>
                        <input class="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 w-full hover:bg-blue-700 text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
                        Sign up
                        </button>
                    </div>
                    <p class="mt-2 text-black-500 text-xs">
                        Do you have an account already,
                        <Link to='/login'> 
                        <a href="#" class="text-black-700 font-bold">log in</a> now.
                        </Link>
                    </p>
                </div>
             </form>
        </div>

    </div>
  )
}

export default Register