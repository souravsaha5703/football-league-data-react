import { useContext, useEffect, useState } from "react";
import { LeagueIdContext } from "../Contexts/LeagueIdContextProvider";

function useLeagueFixtures() {
  const [data, setData] = useState({});
  const { leagueId } = useContext(LeagueIdContext);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY || "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
      },
    };

    // Check if leagueId is defined before attempting to destructure
    if (leagueId) {
      const { date, selectedLeagueId } = leagueId;

      async function fixturesData() {
        try {
          const response = await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?season=2023&date=${date}&league=${selectedLeagueId}`, options);
          const resdata = await response.json();
          setData(resdata);
        } catch (error) {
          console.error("Error fetching fixtures:", error);
        }
      }

      fixturesData();
    }
  }, [leagueId]); // Ensure useEffect runs when leagueId changes

  return data;
}



export default useLeagueFixtures;