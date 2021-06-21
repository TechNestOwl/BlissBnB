import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function HomeCard( key, home ) {
    useSelector(state => state.displayHomesReducer)
    const dispatch = useDispatch()
    return (
        <div>
            <p className="card__blurb">{home.property}</p>
            <p className="card__blurb">{home.description}</p>
        </div>
    )
}
