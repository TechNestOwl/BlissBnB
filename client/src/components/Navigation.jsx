import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
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
                            value=""
                        >
                        </input>
                        <br></br>
                        <Link to="/homesearch">
                            <Button variant="primary">Search</Button>
                        </Link>
                        <Navbar.Text>
                            Signed in as:
                            <Link to="/signin">
                                <a href="#login">Gill Guimaraes</a>
                            </Link>
                        </Navbar.Text>
                    </form>
                </div>
            </nav>
        </div>
    )
}
