import React from "react";
import LeagueStats from "./LeagueStats";

function LeagueStatsHeader() {
    return (
        <div className="w-full p-3 bg-white mt-2 rounded-xl flex flex-col gap-2">
            <div className="w-full h-7 flex items-center justify-between p-2 border-b-2 border-gray-300">
                <p className="font-rejouice text-lg font-semibold ml-2">Players</p>
                <p className="font-rejouice text-lg font-semibold mr-2">Goals</p>
            </div>
            {/* <LeagueStats/> */}
        </div>
    )
}

export default LeagueStatsHeader