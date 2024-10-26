import React from 'react';
import Loader from './Loader';
import useLeagueStandings from '@/Hooks/useLeagueStandings';
import LeagueStanding from './LeagueStandings/LeagueStandings';

function LeagueStandings() {
    const { data, error, loading } = useLeagueStandings();
    return (
        <>
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
                {loading && <div className="w-full flex items-center justify-center mt-5">
                    <Loader color="text-blue-700" size="size-10" />
                </div>}
                {error && <p>Error: {error.message}</p>}
                {data && data.map((standing, index) => {
                    return (
                        <LeagueStanding
                            key={index}
                            position={standing.position}
                            clubLogo={standing.clubLogo}
                            clubName={standing.clubName}
                            matchesPlayed={standing.matchesPlayed}
                            won={standing.won}
                            draw={standing.draw}
                            lose={standing.lose}
                            gf={standing.gf}
                            ga={standing.ga}
                            gd={standing.gd}
                            points={standing.points}
                        />
                    );
                })}
            </div>

        </>
    )
}

export default LeagueStandings