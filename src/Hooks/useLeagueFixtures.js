import { useEffect, useState } from "react";

function useLeagueFixtures(date,id){
    const [data,setData]=useState({})
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
            "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
        },
    };

    useEffect(()=>{
        fetch(`https://api-football-beta.p.rapidapi.com/fixtures?season=2023&date=${date}&league=${id}`,options)
        .then((response)=> response.json())
        .then((resdata)=>setData(resdata))
    },[date,id])

    return data
}

export default useLeagueFixtures;