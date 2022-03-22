import {
  Link 
} from "react-router-dom";

import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
  return (
    <div class="container px-4 max-w-6xl mx-auto my-12 ">
	
        <div class="w-full max-w-xl mx-auto">
          <form class="LgnForm max-w-sm mx-auto  shadow-lg bg-white rounded-sm pt-6 pb-8 mb-4 px-8">
            
            <h1 className="text-gray-500  mb-4 text-4xl  text-center">Login</h1>
            <div class="MskForm">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm  mb-2">
                  Username
                </label>
                <input class="shadow apperance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm mb-2">
                Password
                </label>
                <input class="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
                <p class="text-red-500 text-xs italic">Please fill in your password.</p>
              </div>

              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
                Sign In
                </button>
                <Link to='/forgot'>
                  <a class="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
                </Link>
              </div>
              <p class="mt-2 text-black-500 text-xs">
                Don't have an account, 
                <Link to='/register'>
                  <a href="#" class="text-black-700 font-bold">Create an account</a> now.
                </Link> 
              </p>
              <div class="LgnSm my-4 max-w-sm text-center">
                <a href="#" class="LgnFb flex items-center justify-center p-2 block bg-red-700 rounded-sm text-white md:hover:text-black-600 my-2">
                <FcGoogle className="font-bold mr-3 "/>   

                  Sign up with Google
                </a>
                <a href="#" class="LgnFb flex items-center justify-center p-2 block bg-blue-700 rounded-sm text-white md:hover:text-black-600 my-2">
                  
                    <FaFacebookF className="font-bold mr-3 "/>   
                    Sign up with Facebook
                </a>
              </div>
            </div>
          </form>
      </div>

    </div>
  )
}

export default Login