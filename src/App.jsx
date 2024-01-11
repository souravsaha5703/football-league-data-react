import { useContext, useState } from "react";
import FirstContent from "./Components/FirstContent";
import Header from "./Components/Header";
import Leagues from "./Components/TopLeagues";
import useLeagueFixtures from "./Hooks/useLeagueFixtures";
import Fixtures from "./Components/Fixtures.jsx";
import LeagueIdContextProvider from "./Contexts/LeagueIdContextProvider.jsx";
import LeagueIdContext from "./Contexts/LeagueIdContext.js";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
};

function App() {
    const [country, setCountry] = useState("");
    const [leagueComponents, setLeagueComponents] = useState([]);
    const [date,setDate]=useState();
    const [selectedLeagueId,setSelectedLeagueId]=useState(61);
    const {setLeagueId}=useContext(LeagueIdContext);
    const fixturesData=useLeagueFixtures();

    



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

            data.response.forEach((leagueName) => {
                updatedLeagues.add(
                    {
                        logo:leagueName.league.logo,
                        id:leagueName.league.id
                    }
                );
            });

            return [...updatedLeagues];
        });
    }

    const searchBtnClick = () => {
        leagueNames(country);
    };

    const handleLeagueClick = (e)=>{
        let selectedId=e.target.id;
        setSelectedLeagueId(selectedId);
    }

    const handleFixtures=(e)=>{
        e.preventDefault();
        setLeagueId({date,selectedLeagueId});
        console.log(fixturesData);
    }

    return (
        <>
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
                <div className="mt-5 w-full h-40 px-2 py-2 flex flex-wrap items-center justify-center gap-5 overflow-hidden overflow-y-scroll">
                    {leagueComponents.map((component,index) => {
                        return <img src={component.logo} id={component.id} className="w-24 object-cover cursor-pointer" key={index} onClick={handleLeagueClick}/>;
                    })}
                </div>
            </div>
            <h2 className="mt-4 text-indigo-600 font-playfair font-bold underline text-4xl text-center">
                League Details
            </h2>
            <div className="w-full p-4 flex items-center justify-center">
                <div className="w-3/4 p-4 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-xl flex flex-col shadow-md shadow-slate-400">
                    <h2 className="font-rejouice text-black text-2xl font-medium mx-5 my-5 max-[555px]:text-xl" id="league-name">League Name</h2>
                    <div className="w-full py-2 flex items-center justify-center gap-4 max-[375px]:gap-2 max-[375px]:flex-wrap">
                        <button className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm active:bg-blue-600 active:text-white" id="matchBtn">Matches</button>
                        <button className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm" id="standingsBtn">Standings</button>
                        <button className="font-nb font-semibold text-2xl px-3 py-3 bg-white rounded-md shadow-sm shadow-gray-500 text-blue-600 hover:text-white  hover:bg-blue-600 duration-200 ease-in-out max-md:text-lg max-[425px]:text-sm" id="statsBtn">Stats</button>
                    </div>
                    <div className="w-full bg-white rounded-xl p-4 flex flex-col">
                        <div className="w-full p-2 flex">
                            <input type="date" id="data" value={date} className="w-36 bg-blue-400 h-10 rounded-md px-2 cursor-pointer" onChange={(e)=> setDate(e.target.value)}/>
                            <button className="ml-5 px-3 py-1 bg-blue-500 rounded-lg text-white text-xl font-roboto hover:bg-blue-700 duration-150 ease-in" onClick={handleFixtures}>Search Matches</button>
                        </div>
                        <LeagueIdContextProvider>
                            <Fixtures/>
                        </LeagueIdContextProvider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
