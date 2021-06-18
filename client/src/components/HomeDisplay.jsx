import React from 'react'
// import { displayHomes } from "../actions/displayHomes.js"
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map.jsx";

export default function HomeDisplay() {
    const dispatch = useDispatch();
    useSelector(state => state.displayHomesReducer)
    // useEffect(() => {
    //     displayHomes(dispatch, homes)
    // }, []);

    return (
        <div className="homes__container">
            <div className="map__container"><Map/></div>
        </div>
    )
}
