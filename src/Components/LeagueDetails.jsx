import React, { useContext, useState } from "react";
import { LeagueIdContext } from "../Contexts/LeagueIdContextProvider";
import useLeagueFixtures from "../Hooks/useLeagueFixtures";
import Fixtures from "./Fixtures";
import useLeagueStandings from "../Hooks/useLeagueStandings";
import LeagueStandings from "./LeagueStandings/LeagueStandings";
import LeagueStats from "./LeagueStats/LeagueStats";
import useLeagueStats from "../Hooks/useLeagueStats";

function LeagueDetails({ selectedLeagueId }) {
    const { leagueId, setLeagueId } = useContext(LeagueIdContext);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [leagueMatches, setLeagueMatches] = useState([]);
    const [standingsInfo, setStandingsInfo] = useState([]);
    const [stats, SetStats] = useState([]);
    const [rank, setRank] = useState(0);
    const [fixtureActive, setFixtureActive] = useState(false);
    const [standingActive, setStandingActive] = useState(false);
    const [statsActive, setStatsActive] = useState(false);
    const fixturesData = useLeagueFixtures();
    const standingsData = useLeagueStandings();
    const statsData = useLeagueStats();

    const handleMatchBtn = () => {
        setStandingActive(false);
        setStatsActive(false);
        setFixtureActive(true);
    };

    const handleFixtures = (e) => {
        e.preventDefault();
        setLeagueId({ date, selectedLeagueId });
        setLeagueMatches((prev) => {
            const updatedMatches = new Set([prev]);

            fixturesData?.response?.forEach((leagueMatch) => {
                updatedMatches.add({
                    time: leagueMatch.fixture.date,
                    homeTeam: leagueMatch.teams.home.name,
                    homeTeamLogo: leagueMatch.teams.home.logo,
                    awayTeam: leagueMatch.teams.away.name,
                    awayTeamLogo: leagueMatch.teams.away.logo,
                    win: leagueMatch.goals.home,
                    lose: leagueMatch.goals.away,
                });
            });
            return [...updatedMatches];
        });
    };

    const handleStandingsBtn = (e) => {
        e.preventDefault();
        setFixtureActive(false);
        setStatsActive(false);
        setStandingActive(true);
        setLeagueId({ date, selectedLeagueId });
        if (Object.keys(standingsData).length == 0) {
            alert("Please click again to see results");
        } else {
            setStandingsInfo((prev) => {
                const updatedStandings = new Set([]);
                const newStandings =
                    standingsData?.response[0]?.league?.standings[0];
                const newStandingsArray = Object.entries(newStandings).map(
                    ([key, value]) => ({ key, value })
                );
                newStandingsArray?.forEach((standing) => {
                    updatedStandings.add({
                        position: standing.value.rank,
                        clubName: standing.value.team.name,
                        clubLogo: standing.value.team.logo,
                        matchesPlayed: standing.value.all.played,
                        won: standing.value.all.win,
                        draw: standing.value.all.draw,
                        lose: standing.value.all.lose,
                        gf: standing.value.all.goals.for,
                        ga: standing.value.all.goals.against,
                        gd: standing.value.goalsDiff,
                        points: standing.value.points,
                    });
                });
                return [...updatedStandings];
            });
        }
    };

    const handleStatsBtn = (e) => {
        e.preventDefault();
        setFixtureActive(false);
        setStandingActive(false);
        setStatsActive(true);
        setLeagueId({ date, selectedLeagueId });
        if (Object.keys(statsData).length == 0) {
            alert("Please click again to see results");
        } else {
            SetStats((prev) => {
                const updatedStats = new Set([prev]);

                statsData.response.forEach((playerStats) => {
                    setRank(rank+1);
                    updatedStats.add({
                        playerRank: rank,
                        playerImg: playerStats.player.photo,
                        playerName: playerStats.player.name,
                        goals: playerStats.statistics[0].goals.total,
                    });
                });
                return [...updatedStats];
            });
        }
    };

    return (
        <div>
            <h2 className="mt-4 text-indigo-600 font-playfair font-bold underline text-4xl text-center">
                League Details
            </h2>
            <div className="w-full p-4 flex items-center justify-center">
                <div className="w-3/4 p-4 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-xl flex flex-col shadow-md shadow-slate-400 max-md:w-3/4 max-[555px]:w-5/6 max-[375px]:w-80">
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
                            onClick={handleMatchBtn}
                        >
                            Matches
                        </button>
                        <button
                            className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm"
                            id="standingsBtn"
                            onClick={handleStandingsBtn}
                        >
                            Standings
                        </button>
                        <button
                            className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm"
                            id="statsBtn"
                            onClick={handleStatsBtn}
                        >
                            Stats
                        </button>
                    </div>
                    {fixtureActive ? (
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
                            {leagueMatches &&
                                leagueMatches.map((match, index) => {
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
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {standingActive ? (
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
                            {standingsInfo &&
                                standingsInfo.map((standing, index) => (
                                    <LeagueStandings
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
                                ))}
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {statsActive ? (
                        <div className="w-full p-3 bg-white mt-2 rounded-xl flex flex-col gap-2">
                            <div className="w-full h-7 flex items-center justify-between p-2 border-b-2 border-gray-300">
                                <p className="font-rejouice text-lg font-semibold ml-2">Players</p>
                                <p className="font-rejouice text-lg font-semibold mr-2">Goals</p>
                            </div>
                            {stats &&
                                stats.map((stat, index) => {
                                    return (
                                        <LeagueStats
                                            key={index}
                                            playerRank={stat.playerRank}
                                            playerImg={stat.playerImg}
                                            playerName={stat.playerName}
                                            goals={stat.goals}
                                        />
                                    );
                                })
                            }
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeagueDetails;
