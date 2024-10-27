import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LeagueIdContext } from "../Contexts/LeagueIdContextProvider";

function useLeagueStats() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { leagueId, leagueSeason } = useContext(LeagueIdContext);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_API_KEY || "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
                "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
            },
        };

        if (leagueId) {
            async function liveStandings() {
                setLoading(true);
                try {
                    const response = await fetch(`https://api-football-beta.p.rapidapi.com/players/topscorers?season=${leagueSeason}&league=${leagueId}`, options);
                    const resdata = await response.json();
                    setData(() => {
                        const updatedStats = new Set([]);

                        resdata.response.forEach((playerStats) => {
                            updatedStats.add({
                                playerImg: playerStats.player.photo,
                                playerName: playerStats.player.name,
                                goals: playerStats.statistics[0].goals.total,
                            });
                        });
                        return [...updatedStats];
                    });
                } catch (error) {
                    setError(err.response.data.message);
                    console.error("Error fetching fixtures:", error);
                } finally {
                    setLoading(false);
                }
            }

            liveStandings();
        }

    }, [leagueId]);

    return { data, error, loading };
}

export default useLeagueStats;