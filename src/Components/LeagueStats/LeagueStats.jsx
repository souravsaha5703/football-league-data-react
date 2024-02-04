import React from "react";

function LeagueStats({playerImg,playerName,goals}) {
    return (
        <div className="w-full h-9 flex items-center justify-between p-2 border-b-2 border-gray-300">
            <div className="w-60 h-9 flex gap-3 items-center">
                <img src={playerImg} alt="" className="w-7 object-cover object-center" />
                <h4 className="font-rejouice font-semibold text-lg max-sm:text-sm">{playerName}</h4>
            </div>
                <p className="font-rejouice text-lg font-semibold mr-5">{goals}</p>
        </div>
    )
}

export default LeagueStats