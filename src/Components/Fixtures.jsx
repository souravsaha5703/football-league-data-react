import React from "react";

function Fixtures({ time, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, win, lose }) {
    const dateFormat = (dateString) => {
        const date = new Date(dateString);
        const options = {
            weekday: 'short', // e.g., "Tue"
            day: 'numeric',   // e.g., "29"
            month: 'short',   // e.g., "Oct"
            hour: 'numeric',  // e.g., "1"
            minute: 'numeric',// e.g., "30"
            hour12: true      // "am/pm" format
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }
    return (
        <div className="w-full mt-2 border-2 h-52 border-indigo-400 rounded-xl p-4 flex items-center justify-evenly relative">
            <p className="absolute top-2 left-4 font-noto font-medium text-lg text-blue-500">{dateFormat(time)}</p>
            <div className="w-24 h-24 flex flex-col items-center justify-center gap-2 mt-4">
                <img src={homeTeamLogo} className="w-20 object-cover max-[555px]:w-12" />
                <h3 className="font-noto font-medium text-xl max-[555px]:text-lg text-center">{homeTeam}</h3>
            </div>
            <div className="w-28 h-16 flex items-center justify-center gap-3">
                <p className="font-noto font-medium text-xl max-[555px]:text-lg">{win}</p>
                <p className="font-noto font-medium text-xl max-[555px]:text-lg">VS</p>
                <p className="font-noto font-medium text-xl max-[555px]:text-lg">{lose}</p>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center gap-2 mt-4">
                <img src={awayTeamLogo} className="w-20 object-cover max-[555px]:w-12" />
                <h3 className="font-noto font-medium text-xl max-[555px]:text-lg text-center">{awayTeam}</h3>
            </div>
        </div>
    )
}

export default Fixtures