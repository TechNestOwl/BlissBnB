import React from 'react'
import { Link } from 'react-router-dom'
import bliss from "../assets/bliss.png"

export default function Navigation() {
    return (
        <div>
            <nav>
                <div className="nav-logo">
                    <Link to="/">
                        <img src={bliss} alt="logo" />
                    </Link>
                </div>
                <ul className="navLinkContainer">
                    <Link to="/">
                        <li className="navLinks">Home</li>
                    </Link>
                    <Link to="/HomeDisplay">
                    <li className="navLinks">Explore Homes</li>
                    </Link>
                </ul>
                <div>
                    <form className="navSearch">
                        <input
                            type="text"
                            placeholder="Search homes"
                        >
                        </input>
<<<<<<< Updated upstream
                        <button 
                        className="searchbtn" 
=======
                        <button
                            className="searchbtn"
>>>>>>> Stashed changes
                        >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
