import React from "react";

function LeagueStandings({position,clubLogo,clubName,matchesPlayed,won,draw,lose,gf,ga,gd,points}) {
    return (
        <div className="w-full h-10 flex items-center justify-between p-2 border-b-2 border-gray-300">
            <div className="w-1/2 p-0.5 flex gap-2 items-center">
                <p className="font-rejouice font-semibold text-lg max-[555px]:text-sm">{position}</p>
                <img src={clubLogo} alt="" className="w-7 h-7 object-cover object-center" />
                <h4 className="font-rejouice font-semibold text-lg max-[555px]:text-xs max-[320px]:truncate">{clubName}</h4>
            </div>
            <div className="w-1/2 p-0.5 flex gap-3 items-center justify-end max-[555px]:gap-3">
                <p className="font-rejouice text-lg font-semibold max-[555px]:text-sm">{matchesPlayed}</p>
                <p className="font-rejouice text-lg font-semibold w-4 max-[555px]:text-sm max-[555px]:w-2">{won}</p>
                <p className="font-rejouice text-lg font-semibold w-4 max-[555px]:text-sm max-[555px]:w-2">{draw}</p>
                <p className="font-rejouice text-lg font-semibold w-4 max-[555px]:text-sm max-[555px]:w-2">{lose}</p>
                <p className="font-rejouice text-lg font-semibold w-4 max-sm:hidden">{gf}</p>
                <p className="font-rejouice text-lg font-semibold w-4 max-sm:hidden">{ga}</p>
                <p className="font-rejouice text-lg font-semibold w-4 max-sm:hidden">{gd}</p>
                <p className="font-rejouice text-lg font-semibold w-4 max-[555px]:text-sm max-[555px]:w-2">{points}</p>
            </div>
        </div>
    )
}

export default LeagueStandings