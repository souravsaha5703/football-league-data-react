import React from 'react';
import Loader from './Loader';
import useLeagueStandings from '@/Hooks/useLeagueStandings';
import LeagueStanding from './LeagueStandings/LeagueStandings';

function LeagueStandings() {
    const { data, error, loading } = useLeagueStandings();
    return (
        <>
            <div className="w-full p-3 bg-white mt-2 rounded-xl flex flex-col gap-2">
                <div className="w-full h-7 flex items-center justify-between p-1 border-b-2 border-gray-300">
                    <div>
                        <h4 className="font-noto font-medium text-lg max-[555px]:text-sm">Club</h4>
                    </div>
                    <div className="p-0.5 flex">
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">MP</div>
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">W</div>
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">D</div>
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">L</div>
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-sm:hidden max-[540px]:w-[25px] max-[425px]:w-[20px]">GF</div>
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-sm:hidden max-[540px]:w-[25px] max-[425px]:w-[20px]">GA</div>
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-sm:hidden max-[540px]:w-[25px] max-[425px]:w-[20px]">GD</div>
                        <div className="font-noto text-lg w-8 flex items-center justify-center text-center font-medium max-[555px]:text-sm max-[540px]:w-[25px] max-[425px]:w-[20px]">PT</div>
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