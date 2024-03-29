import React from "react";
import heroimage from '../assets/heroimage.png'

function FirstContent() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white from-20% via-blue-300 via-50% to-indigo-300 rounded-b-3xl">
            <div className="w-1/2 h-full flex flex-col items-center justify-center ps-24 max-[768px]:w-full max-[500px]:ps-10">
                <div className="w-full flex flex-col items-start justify-start gap-5">
                    <h1 className="font-rejouice text-8xl font-bold tracking-normal text-indigo-600 text-center max-[1024px]:text-7xl max-[768px]:text-7xl max-[500px]:text-5xl">Breaking</h1>
                    <h1 className="font-rejouice text-8xl font-bold tracking-normal text-indigo-600 text-center max-[1024px]:text-7xl max-[768px]:text-7xl max-[500px]:text-5xl">Football</h1>
                    <h1 className="font-rejouice text-8xl font-bold tracking-normal text-blue-700 text-center max-[1024px]:text-7xl max-[768px]:text-7xl max-[500px]:text-5xl">Boundaries</h1>
                </div>
                <div className="w-full h-40 flex items-center justify-center gap-6">
                    <p className="text-3xl font-semibold text-gray-600 font-roboto text-start max-[1024px]:text-2xl max-[768px]:text-2xl max-[500px]:text-xl">Unveiling the gateway to football's finest match details, scores, standings and many more at one place.</p>
                </div>
            </div>
            <div className="w-2/5 h-full flex items-center justify-center max-[1024px]:w-1/2 max-[768px]:hidden">
                <img src={heroimage} className="w-full h-full"/>
            </div>
        </div>
    )
}

export default FirstContent