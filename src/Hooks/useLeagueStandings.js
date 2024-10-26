import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LeagueIdContext } from "../Contexts/LeagueIdContextProvider";

function useLeagueStandings() {
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
                    const response = await fetch(`https://api-football-beta.p.rapidapi.com/standings?season=${leagueSeason}&league=${leagueId}`, options);
                    const resdata = await response.json();
                    setData(() => {
                        const updatedStandings = new Set([]);
                        const newStandings =
                            resdata?.response[0]?.league?.standings[0];
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

export default useLeagueStandings;