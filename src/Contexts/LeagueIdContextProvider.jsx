import React, { createContext, useState } from "react";

export const LeagueIdContext = createContext();

export const LeagueIdContextProvider = ({ children }) => {
  const [leagueId, setLeagueId] = useState(61);
  const [leagueName, setLeagueName] = useState();
  const [leagueSeason, setLeagueSeason] = useState();

  return (
    <LeagueIdContext.Provider value={{ leagueId, setLeagueId, leagueName, setLeagueName, leagueSeason, setLeagueSeason }}>
      {children}
    </LeagueIdContext.Provider>
  );
};

