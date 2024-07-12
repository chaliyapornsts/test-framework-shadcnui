import React from 'react'

const Nav = () => {
    return (
        <div className='flex justify-center bg-white shadow-md p-10 fixed z-10 w-full'>
            <div className="flex">
                <div className="hidden lg:flex space-x-10">
                    <a href="#" className="text-gray-600 hover:text-orange-500">Article</a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">Library</a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">Exhibition</a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">Artist</a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">Collections</a>
                    <div>
                        <a href="/"><img className="w-10" src="../src/assets/Group 197.png" alt="" /></a>
                    </div>
                    <a href="#" className="text-gray-600 hover:text-orange-500">Gallery</a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">Museum</a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">Art News & Art Event</a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">About us</a>
                </div>
            </div>
        </div>
    )
}

export default Nav