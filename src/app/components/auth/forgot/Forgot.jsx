import React from 'react'


const Forgot = () => {
  return (
      <div class="container px-4 max-w-6xl m-auto my-20">
    
        <div class="w-full max-w-xl mx-auto my-10">
          <form class="LgnForm max-w-sm mx-auto  shadow-lg bg-white rounded-sm pt-6 pb-8 mb-4 px-8">
            <h1 className="text-gray-500  mb-4 text-4xl  text-center">Forgot</h1>
            <div class="MskForm">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm  mb-2">
                      Email
                    </label>
                    <input class="shadow apperance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" aria-required/>
                  </div>
        
                  <div class="flex items-center justify-between">
                    <button class="bg-blue-500 w-full hover:bg-blue-700 text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
                    Submit
                    </button>
                  </div>
            </div>
          </form>
      </div>
      
    </div>
  )
}

export default Forgot