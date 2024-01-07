import React, { useState } from "react";

function LeagueIcons({logo}){

    return (
        <img src={logo} className="w-24 object-cover cursor-pointer"/>
    )
}

export default LeagueIcons