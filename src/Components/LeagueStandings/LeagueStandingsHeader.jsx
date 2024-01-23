import React from "react";
import LeagueStandings from "./LeagueStandings";

function LeagueStandingsHeader() {
    return (
        <div className="w-full p-3 bg-white mt-2 rounded-xl flex flex-col gap-2">
            <div className="w-full h-7 flex items-center justify-between p-2 border-b-2 border-gray-300">
                <div className="w-1/2 p-0.5">
                    <h4 className="font-rejouice font-semibold text-lg max-[555px]:text-sm">Club</h4>
                </div>
                <div className="w-1/2 p-0.5 flex gap-1.5 items-center justify-end">
                    <p className="font-rejouice text-lg font-semibold max-[555px]:text-sm">MP</p>
                    <p className="font-rejouice text-lg font-semibold max-[555px]:text-sm">W</p>
                    <p className="font-rejouice text-lg font-semibold max-[555px]:text-sm">D</p>
                    <p className="font-rejouice text-lg font-semibold max-[555px]:text-sm">L</p>
                    <p className="font-rejouice text-lg font-semibold max-sm:hidden">GF</p>
                    <p className="font-rejouice text-lg font-semibold max-sm:hidden">GA</p>
                    <p className="font-rejouice text-lg font-semibold max-sm:hidden">GD</p>
                    <p className="font-rejouice text-lg font-semibold max-[555px]:text-sm">PTS</p>
                </div>
            </div>
        </div>
    )
}

export default LeagueStandingsHeader