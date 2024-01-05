import React from 'react'
import premierLeague from '../assets/premier_league.png'
import serieA from '../assets/serie_a.png'
import laLiga from '../assets/la_liga.png'
import bundesliga from '../assets/bundesliga.png'
import leagueOne from '../assets/league_one.png'
import isl from '../assets/indian-super-league.png'
import eridivice from '../assets/eridivice.png'
import mls from '../assets/mls.png'

function Leagues(){
    return(
        <div className='w-full h-screen flex items-center justify-center flex-col rounded-t-2xl bg-gradient-to-br from-white to-blue-300'>
            <h2 className='font-anton font-bold text-blue-600 text-4xl underline mt-4'>Explore Top Leagues</h2>
            <div className='w-2/3 bg-white p-5 mt-5 rounded-lg flex flex-wrap gap-6 items-center justify-center'>
                <img src={premierLeague} className='w-32 object-cover object-center cursor-pointer'/>
                <img src={serieA} className='w-32 object-cover object-center cursor-pointer'/>
                <img src={laLiga} className='w-32 object-cover object-center cursor-pointer'/>
                <img src={bundesliga} className='w-32 object-cover object-center cursor-pointer'/>
                <img src={leagueOne} className='w-40 object-cover object-center cursor-pointer'/>
                <img src={isl} className='w-32 object-cover object-center cursor-pointer'/>
                <img src={eridivice} className='w-32 object-cover object-center cursor-pointer'/>
                <img src={mls} className='w-32 object-cover object-center cursor-pointer'/>
            </div>
        </div>
    )
}

export default Leagues