import React, { useContext, useState } from "react";
import { LeagueIdContext } from "../Contexts/LeagueIdContextProvider";
import useLeagueFixtures from "../Hooks/useLeagueFixtures";
import Fixtures from "./Fixtures";

function LeagueDetails({selectedLeagueId}) {
    const { leagueId, setLeagueId } = useContext(LeagueIdContext);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const fixturesData = useLeagueFixtures();

    const handleFixtures = (e) => {
        e.preventDefault();
        setLeagueId({date, selectedLeagueId});
        console.log(leagueId);
        console.log(fixturesData);
    };

    return (
        <div>
            <h2 className="mt-4 text-indigo-600 font-playfair font-bold underline text-4xl text-center">
                League Details
            </h2>
            <div className="w-full p-4 flex items-center justify-center">
                <div className="w-3/4 p-4 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-xl flex flex-col shadow-md shadow-slate-400">
                    <h2
                        className="font-rejouice text-black text-2xl font-medium mx-5 my-5 max-[555px]:text-xl"
                        id="league-name"
                    >
                        League Name
                    </h2>
                    <div className="w-full py-2 flex items-center justify-center gap-4 max-[375px]:gap-2 max-[375px]:flex-wrap">
                        <button
                            className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm active:bg-blue-600 active:text-white"
                            id="matchBtn"
                        >
                            Matches
                        </button>
                        <button
                            className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm"
                            id="standingsBtn"
                        >
                            Standings
                        </button>
                        <button
                            className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm"
                            id="statsBtn"
                        >
                            Stats
                        </button>
                    </div>
                    <div className="w-full bg-white rounded-xl p-4 flex flex-col">
                        <div className="w-full p-2 flex">
                            <input
                                type="date"
                                id="data"
                                value={date}
                                className="w-36 bg-blue-400 h-10 rounded-md px-2 cursor-pointer"
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <button
                                className="ml-5 px-3 py-1 bg-blue-500 rounded-lg text-white text-xl font-roboto hover:bg-blue-700 duration-150 ease-in"
                                onClick={handleFixtures}
                            >
                                Search Matches
                            </button>
                        </div>
                        {/* <LeagueIdContextProvider> */}
                            <Fixtures />
                        {/* </LeagueIdContextProvider> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeagueDetails;
