import React, { useContext, useState } from 'react';
import LeagueMatches from './LeagueMatches';
import LeagueStandings from './LeagueStandings';
import LeagueStatistics from './LeagueStatistics';
import { LeagueIdContext } from '@/Contexts/LeagueIdContextProvider';

function LeagueInfo() {

    const [matchSection, setMatchSection] = useState(false);
    const [standingsSection, setStandingsSection] = useState(false);
    const [statsSection, setStatsSection] = useState(false);
    const [date, setDate] = useState('');

    const { leagueName } = useContext(LeagueIdContext);

    const handleMatches = () => {
        setDate(new Date().toISOString().split("T")[0]);
        setStandingsSection(false);
        setStatsSection(false);
        setMatchSection(true);
    }

    const handleStandings = () => {
        setMatchSection(false);
        setStatsSection(false);
        setStandingsSection(true);
    }

    const handleStats = () => {
        setMatchSection(false);
        setStandingsSection(false);
        setStatsSection(true);
    }

    return (
        <>
            <div className='mt-10 w-full p-5 flex flex-col items-center justify-center'>
                <h3 className="font-roboto text-4xl text-blue-600 font-bold underline mt-4 max-[500px]:text-2xl">
                    League Details
                </h3>
                <div className='mt-8 w-4/5 p-5 bg-gradient-to-b from-slate-50 to-blue-300 rounded-md flex flex-col max-[425px]:w-11/12'>
                    <h2 className="font-rejouice text-black text-2xl font-medium mx-5 my-5 max-[555px]:text-xl" id="league-name">
                        {leagueName}
                    </h2>
                    <div className="w-full py-2 flex items-center justify-center gap-3 max-[375px]:gap-2 max-[375px]:flex-wrap">
                        <button
                            className="font-noto font-medium text-2xl px-3 py-2 bg-white rounded-sm shadow-sm shadow-slate-400 text-blue-600 hover:text-white hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm"
                            id="matchBtn"
                            onClick={handleMatches}
                        >
                            Matches
                        </button>
                        <button
                            className="font-noto font-medium text-2xl px-3 py-2 bg-white rounded-sm shadow-sm shadow-slate-400 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm"
                            id="standingsBtn"
                            onClick={handleStandings}
                        >
                            Standings
                        </button>
                        <button
                            className="font-noto font-medium text-2xl px-3 py-2 bg-white rounded-sm shadow-sm shadow-slate-400 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm"
                            id="statsBtn"
                            onClick={handleStats}
                        >
                            Stats
                        </button>
                    </div>
                    {matchSection && <LeagueMatches selectedDate={date} />}
                    {standingsSection && <LeagueStandings />}
                    {statsSection && <LeagueStatistics />}
                </div>
            </div>
        </>
    )
}

export default LeagueInfo