import React from "react";

function FirstContent() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-10">
                <h1 className="font-rejouice text-8xl font-bold tracking-normal text-indigo-600 text-center max-[1024px]:text-7xl max-[500px]:text-6xl">Sideline Football</h1>
                <p className="text-3xl font-medium text-slate-800 font-noto text-center max-[1024px]:text-2xl max-[500px]:text-lg">Get football match timings, scores, standings and many more from around the world at one place</p>
            </div>
        </div>
    )
}

export default FirstContent