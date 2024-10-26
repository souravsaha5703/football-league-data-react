import React from 'react';
import useLeagueFixtures from '@/Hooks/useLeagueFixtures';
import Loader from './Loader';
import Fixtures from './Fixtures';

function LeagueMatches({ selectedDate }) {
    const { data, error, loading } = useLeagueFixtures(selectedDate);
    return (
        <>
            {loading && <div className="w-full flex items-center justify-center mt-5">
                <Loader color="text-blue-700" size="size-10" />
            </div>}
            {error && <p>Error: {error.message}</p>}
            {data && data.map((match, index) => {
                return (
                    <Fixtures
                        key={index}
                        time={match.time}
                        homeTeam={match.homeTeam}
                        homeTeamLogo={match.homeTeamLogo}
                        awayTeam={match.awayTeam}
                        awayTeamLogo={match.awayTeamLogo}
                        win={match.win}
                        lose={match.lose}
                    />
                );
            })}
        </>
    )
}

export default LeagueMatches