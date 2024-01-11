import React, { useState } from "react";
import LeagueIdContext from "./LeagueIdContext";

const LeagueIdContextProvider=({children})=>{
    const [leagueId,setLeagueId]=useState(29)
    return(
        <LeagueIdContext.Provider value={{leagueId,setLeagueId}}>
            {children}
        </LeagueIdContext.Provider>
    )
}

export default LeagueIdContextProvider