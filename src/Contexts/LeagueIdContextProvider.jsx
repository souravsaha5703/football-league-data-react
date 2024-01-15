import React, { createContext, useState } from "react";

export const LeagueIdContext = createContext();

export const LeagueIdContextProvider = ({ children }) => {
//   const [leagueId, setLeagueId] = useState({ date: "", selectedLeagueId: "" });
  const [leagueId, setLeagueId] = useState();

  return (
    <LeagueIdContext.Provider value={{ leagueId, setLeagueId }}>
      {children}
    </LeagueIdContext.Provider>
  );
};

