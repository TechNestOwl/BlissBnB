import React, { useEffect } from 'react'
import { displayHomes } from "../action-creators/homesActions.js";
import { useDispatch, useSelector } from "react-redux";
import { Data } from "../Data.js"
import { HomesContainer, HomesDisplayContainer } from "./StyledHomes.js";
import Map from "./Map.jsx";
import "../styles/Homes.css";
import HomeCard from "./HomeCard.jsx";

export default function Homes() {
    const dispatch = useDispatch();
    useSelector(state => state.homesReducer);
    const homes = Data
    useEffect(() => {
        displayHomes(dispatch, homes)
    }, []);

    return (
        <HomesContainer>  
        <HomesDisplayContainer> 
            <div className="mapbox__container">
                <div id="map"><Map /></div>
            </div>
            <div className="homes__dataMap">
            {homes.map((home) => 
                <HomeCard key={home.id} home={home}/>
            )}
        </div>
        </HomesDisplayContainer> 
        </HomesContainer>
    )
}
