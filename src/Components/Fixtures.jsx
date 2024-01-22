import React from "react";
import bundesliga from '../assets/bundesliga.png'

function Fixtures({time,homeTeam,homeTeamLogo,awayTeam,awayTeamLogo,win,lose}){
    return(
        <div className="w-full mt-2 border-2 h-52 border-indigo-400 rounded-xl p-4 flex items-center justify-evenly relative">
            <p className="absolute top-2 left-4 font-roboto text-lg text-blue-500">{time}</p>
            <div className="w-24 h-24 flex flex-col items-center justify-center gap-2 mt-4">
                <img src={homeTeamLogo} className="w-20 object-cover max-[555px]:w-12"/>
                <h3 className="font-rejouice font-semibold text-xl max-[555px]:text-lg text-center">{homeTeam}</h3>
            </div>
            <div className="w-28 h-16 flex items-center justify-center gap-3">
                <p className="font-rejouice font-bold text-xl max-[555px]:text-lg">{win}</p>
                <p className="font-rejouice font-bold text-xl max-[555px]:text-lg">VS</p>
                <p className="font-rejouice font-bold text-xl max-[555px]:text-lg">{lose}</p>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center gap-2 mt-4">
                <img src={awayTeamLogo} className="w-20 object-cover max-[555px]:w-12"/>
                <h3 className="font-rejouice font-semibold text-xl max-[555px]:text-lg text-center">{awayTeam}</h3>
            </div>
        </div>
    )
}

export default Fixtures