import { useContext, useState } from "react";
import FirstContent from "./Components/FirstContent";
import Header from "./Components/Header";
import Leagues from "./Components/TopLeagues";

import { LeagueIdContextProvider } from "./Contexts/LeagueIdContextProvider";
import LeagueDetails from "./Components/LeagueDetails";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY || "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
};

function App() {
    const [country, setCountry] = useState("");
    const [leagueComponents, setLeagueComponents] = useState([]);
    const [selectedLeagueId, setSelectedLeagueId] = useState(61);

    async function leagueNames(countryInfo) {
        const response = await fetch(
            "https://api-football-beta.p.rapidapi.com/leagues?country=" +
                countryInfo,
            options
        );
        let data = await response.json();

        setLeagueComponents((prevState) => {
            // Using Set to avoid duplicates
            const updatedLeagues = new Set([prevState]);

            data?.response?.forEach((leagueName) => {
                updatedLeagues.add({
                    logo: leagueName.league.logo,
                    id: leagueName.league.id,
                });
            });

            return [...updatedLeagues];
        });
    }

    const searchBtnClick = () => {
        leagueNames(country);
    };

    const handleLeagueClick = (e) => {
        let selectedId = e.target.id;
        setSelectedLeagueId(selectedId);
    };

    return (
        <>
            <div>
                <Header />
                <FirstContent />
                <Leagues />
                <div className="w-full p-5 flex items-center justify-center flex-col">
                    <h3 className="font-roboto text-4xl text-blue-600 font-bold underline mt-4">
                        Search Leagues by country
                    </h3>
                    <input
                        type="text"
                        placeholder="Enter Country Name"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-72 mt-5 px-4 py-3 border-2 border-gray-500 outline-none rounded-md text-lg font-bold focus:border-blue-600"
                    />
                    <button
                        onClick={searchBtnClick}
                        className="outline-none px-4 py-2 border-2 border-blue-500 mt-5 font-rejouice text-blue-500 text-2xl rounded duration-150 ease-in-out hover:bg-blue-500 hover:text-white"
                    >
                        Search League
                    </button>
                    <div className="mt-5 w-full h-max px-2 py-2 flex flex-wrap items-center justify-center gap-5 overflow-hidden overflow-y-scroll">
                        {leagueComponents && leagueComponents.map((component, index) => {
                            return (
                                <img
                                    src={component.logo}
                                    id={component.id}
                                    className="w-24 object-cover cursor-pointer"
                                    key={index}
                                    onClick={handleLeagueClick}
                                />
                            );
                        })}
                    </div>
                </div>
                <LeagueIdContextProvider>
                    <LeagueDetails selectedLeagueId={selectedLeagueId} />
                </LeagueIdContextProvider>
            </div>
        </>
    );
}

export default App;
