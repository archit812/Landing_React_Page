// #00df9a
import React from "react";
import Typed from 'react-typed';

function Hero() {

    return (
        <div className="text-white ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center ">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">Grow with Data</h1>
                <div className="flex flex-row items-center mx-auto justify-evenly">
                    <p className="md:text-5xl sm:text-4xl font-bold py-4">Fast, flexible financing for </p>
                    <Typed className="text-[#00df9a] md:text-5xl p-2 sm:text-4xl md:pl-4 font-bold" strings={['BTC', 'SASS', 'BTB']} typeSpeed={100} backSpeed={10} />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SASS paltforms. </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md text-2xl my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
