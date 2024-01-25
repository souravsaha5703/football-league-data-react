import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LeagueIdContext, LeagueIdContextProvider } from "../Contexts/LeagueIdContextProvider";

function useLeagueStats() {
    const [data, setData] = useState({});
    const { leagueId } = useContext(LeagueIdContext);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
                "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
            },
        };

        if (leagueId) {
            const { selectedLeagueId } = leagueId;

            async function liveStandings() {
                try {
                    const response = await fetch(`https://api-football-beta.p.rapidapi.com/players/topscorers?season=2023&league=${selectedLeagueId}`, options);
                    const resdata = await response.json();
                    setData(resdata);
                }catch(error){
                    console.error("Error fetching fixtures:", error);
                }
            }

            liveStandings();
        }

    }, [leagueId]);

    return data;
}

export default useLeagueStats;