import { useContext, useEffect, useState } from "react";
import { LeagueIdContext } from "../Contexts/LeagueIdContextProvider";

function useLeagueFixtures(date) {
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
      async function fixturesData() {
        setLoading(true);
        try {
          const response = await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?season=${leagueSeason}&date=${date}&league=${leagueId}`, options);
          const resdata = await response.json();

          setData(() => {
            const updatedMatches = new Set([]);

            resdata?.response?.forEach((leagueMatch) => {
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
        } catch (error) {
          setError(err.response.data.message);
          console.error("Error fetching fixtures:", error);
        } finally {
          setLoading(false);
        }
      }

      fixturesData();
    }
  }, [leagueId]);

  return { data, error, loading };
}

export default useLeagueFixtures;