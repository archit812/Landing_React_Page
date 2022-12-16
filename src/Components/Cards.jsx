import React from "react";
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

function Cards() {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto mt-[-3rem] grid md:grid-cols-3 gap-8">
                <div className="w-full bg-transparent shadow-xl flex flex-col py-4 my-4 rounded-xl cursor-pointer hover:scale-105 duration-300">
                    <img className="w-20 mx-auto bg-white" src={Single} alt="/" />
                    <h2 className="text-center font-bold text-xl py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b max-8 mt-8">500Gb Storage</p>
                        <p className="py-2 border-b max-8">1 Granted User</p>
                        <p className="py-2 border-b max-8">Send upto 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-8 mx-auto px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex bg-transparent flex-col py-4 my-4 rounded-xl cursor-pointer hover:scale-105 duration-300">
                    <img className="w-20 mx-auto bg-white" src={Double} alt="/" />
                    <h2 className="text-center font-bold text-xl py-8">Double User</h2>
                    <p className="text-center text-4xl font-bold">$249</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b max-8 mt-8">1Tb Storage</p>
                        <p className="py-2 border-b max-8">5 Granted User</p>
                        <p className="py-2 border-b max-8">Send upto 20 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col bg-transparent  py-4 my-4 rounded-xl cursor-pointer hover:scale-105 duration-300">
                    <img className="w-20 mx-auto bg-white" src={Triple} alt="/" />
                    <h2 className="text-center font-bold text-xl py-8">Triple User</h2>
                    <p className="text-center text-4xl font-bold">$349</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b max-8 mt-8">5Tb Storage</p>
                        <p className="py-2 border-b max-8">10 Granted User</p>
                        <p className="py-2 border-b max-8">Send upto 50 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;