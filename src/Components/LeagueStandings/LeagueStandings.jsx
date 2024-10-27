import React from "react";

function LeagueStandings({position,clubLogo,clubName,matchesPlayed,won,draw,lose,gf,ga,gd,points}) {
    return (
        <div className="w-full h-10 flex items-center justify-between p-2 border-b-2 border-gray-300">
            <div className="flex gap-2 items-center max-[526px]:w-1/2">
                <p className="font-noto font-medium w-5 text-center text-lg max-[555px]:text-sm">{position}</p>
                <img src={clubLogo} alt="" className="w-7 h-7 object-cover object-center max-[425px]:size-5" />
                <h4 className="font-noto font-medium text-lg max-[764px]:text-base max-[526px]:truncate max-[425px]:text-xs">{clubName}</h4>
            </div>
            <div className="flex">
                <div className="font-noto text-lg text-center font-medium w-[31px] max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">{matchesPlayed}</div>
                <div className="font-noto text-lg text-center font-medium w-[31px] max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">{won}</div>
                <div className="font-noto text-lg text-center font-medium w-[31px] max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">{draw}</div>
                <div className="font-noto text-lg text-center font-medium w-[31px] max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">{lose}</div>
                <div className="font-noto text-lg text-center font-medium w-[31px] max-sm:hidden max-[540px]:w-[25px] max-[425px]:w-[20px]">{gf}</div>
                <div className="font-noto text-lg text-center font-medium w-[31px] max-sm:hidden max-[540px]:w-[25px] max-[425px]:w-[20px]">{ga}</div>
                <div className="font-noto text-lg text-center font-medium w-[31px] max-sm:hidden max-[540px]:w-[25px] max-[425px]:w-[20px]">{gd}</div>
                <div className="font-noto text-lg text-center font-medium w-[31px] max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">{points}</div>
            </div>
        </div>
    )
}

export default LeagueStandings