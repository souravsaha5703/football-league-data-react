import React from 'react';
import Loader from './Loader';
import useLeagueStats from '@/Hooks/useLeagueStats';
import LeagueStats from './LeagueStats/LeagueStats';

function LeagueStatistics() {
  const { data, error, loading } = useLeagueStats();
  return (
    <>
      <div className="w-full p-3 bg-white mt-2 rounded-xl flex flex-col gap-2">
        <div className="w-full h-7 flex items-center justify-between p-2 border-b-2 border-gray-300">
          <p className="font-rejouice text-lg font-semibold ml-2">Players</p>
          <p className="font-rejouice text-lg font-semibold mr-2">Goals</p>
        </div>
        {loading && <div className="w-full flex items-center justify-center mt-5">
          <Loader color="text-blue-700" size="size-10" />
        </div>}
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.map((stat, index) => {
            return (
              <LeagueStats
                key={index}
                playerImg={stat.playerImg}
                playerName={stat.playerName}
                goals={stat.goals}
              />
            );
          })}
      </div>
    </>
  )
}

export default LeagueStatistics