import React from 'react'

const Nav = () => {
  return (
    <div className='bg-white shadow-md border-b border-gray-200 py-4'>
        <div className="mx-32">
            <div className="flex justify-between">
                <div className="flex">
                    <img src="https://avatars.githubusercontent.com/u/189954645?s=48&v=4" alt="" />
                    <h1 className="text-xl pt-3 text-yellow-600 font-semibold"><span className='uppercase'>CoconutDB Web</span> v1</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav