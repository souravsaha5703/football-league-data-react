import { useContext, useEffect, useState } from "react";
import LeagueIdContext from "../Contexts/LeagueIdContext";

function useLeagueFixtures(){
    const [data,setData]=useState({})
    const {leagueId}=useContext(LeagueIdContext);
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
            "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
        },
    };

    async function fixturesData(){
        const response=await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?season=2023&date=${leagueId.date}&league=${leagueId.selectedLeagueId}`,options);
        let resdata=await response.json();
        setData(resdata);
    }

    fixturesData();
    
    return data
}

export default useLeagueFixtures;