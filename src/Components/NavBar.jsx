import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function NavBar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        console.log(nav)
    }


    return (
        <div className="text-white flex flex-row h-24 justify-around items-center max-w-[1240px] mx-auto px-4 cursor-pointer">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
            <ul className="hidden md:flex cursor-pointer">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%]  border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : ' fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">REACT</h1>
                <ul className="pt-12 uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;