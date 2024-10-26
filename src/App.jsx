import { useContext, useState } from "react";
import FirstContent from "./Components/FirstContent";
import Leagues from "./Components/TopLeagues";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Loader from "./Components/Loader";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import LeagueInfo from "./Components/LeagueInfo";
import { LeagueIdContext } from "./Contexts/LeagueIdContextProvider";

function App() {
    const [loader, setLoader] = useState(false);
    const [country, setCountry] = useState("");
    const [leagueComponents, setLeagueComponents] = useState([]);
    const [showLeagues, setShowLeagues] = useState(false);
    const [leagueSeasonActive, setLeagueSeasonActive] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const { leagueId, setLeagueId, leagueName, setLeagueName, setLeagueSeason } = useContext(LeagueIdContext);

    const searchBtnClick = async () => {
        setShowLeagues(false);
        setLoader(true);
        const options = {
            method: "GET",
            url: `https://api-football-beta.p.rapidapi.com/leagues`,
            params: { country: country },
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_FOOTBALL_API_KEY || "b95a4219c8msh9b913764c776818p1b95d1jsn6b530f0e9e2a",
                "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
            },
        };
        try {
            const response = await axios.request(options);

            if (response.data.results == 0) {
                alert("No League Found");
            }

            setLeagueComponents((prevState) => {
                // Using Set to avoid duplicates
                const updatedLeagues = new Set([prevState]);

                response.data.response.forEach((leagueName) => {
                    updatedLeagues.add({
                        logo: leagueName.league.logo,
                        id: leagueName.league.id,
                        name: leagueName.league.name,
                    });
                });

                return [...updatedLeagues];
            });

            setLoader(false);
            setShowLeagues(true);

        } catch (error) {
            console.error(error);
        }
    };

    const handleLeagueClick = (selecteLeagueId, selectedLeagueName) => {
        setLeagueId(selecteLeagueId);
        setLeagueName(selectedLeagueName);
        setLeagueSeasonActive(true);
    };

    const handleSeason = (season) => {
        setLeagueSeason(season);
        setShowDetails(true);
    }

    return (
        <>
            <div>
                <FirstContent />
                <Leagues />
                <div className="w-full p-5 flex items-center justify-center flex-col">
                    <h3 className="font-roboto text-4xl text-blue-600 font-bold underline mt-4 max-[500px]:text-2xl">
                        Search Leagues by country
                    </h3>
                    <Input
                        type="text"
                        placeholder="Enter Country Name"
                        value={country}
                        onChange={(e) => setCountry(e.target.value.toLowerCase())}
                        className="mt-4 w-72 h-12 font-noto text-base capitalize font-medium"
                    />
                    <Button
                        onClick={searchBtnClick}
                        className="font-rejouice mt-5 text-xl h-12"
                        size="lg"
                    >
                        Search League
                    </Button>
                    {loader && <div className="w-full flex items-center justify-center mt-5">
                        <Loader color="text-blue-700" size="size-10" />
                    </div>
                    }
                    {!showLeagues ? (
                        <></>
                    ) : (
                        <div className="mt-5 w-full h-48 px-2 py-2 flex flex-wrap items-center justify-center gap-5 overflow-hidden overflow-y-scroll transition-all ease-in-out duration-100">
                            {leagueComponents.length === 1 ? (
                                <h1 className="font-noto text-2xl font-medium capitalize text-center max-[425px]:text-lg">No leagues found please enter valid country name</h1>
                            ) : leagueComponents.map((component, index) => {
                                return (
                                    <img
                                        src={component.logo}
                                        id={component.id}
                                        className={`w-24 object-cover cursor-pointer max-[500px]:w-16 ${component.name}`}
                                        key={index}
                                        onClick={() => handleLeagueClick(component.id, component.name)}
                                    />
                                );
                            })}
                        </div>
                    )}
                    {leagueSeasonActive && <Select onValueChange={handleSeason}>
                        <SelectTrigger className="w-[180px] font-noto font-medium mt-12">
                            <SelectValue placeholder="Select Season" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024" className="font-noto cursor-pointer font-medium">2024-2025</SelectItem>
                            <SelectItem value="2023" className="font-noto cursor-pointer font-medium">2023-2024</SelectItem>
                            <SelectItem value="2022" className="font-noto cursor-pointer font-medium">2022-2023</SelectItem>
                        </SelectContent>
                    </Select>
                    }
                </div>
                {showDetails && <LeagueInfo />}
            </div >
        </>
    );
}

export default App;
