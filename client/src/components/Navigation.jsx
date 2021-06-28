import React, { useState } from 'react'
import { Button, Navbar, FormControl, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bliss from "../assets/bliss.png"
// import signOut from "../App"


export default function Navigation() {
    const userInStorage = localStorage.getItem("supabase.auth.token");
    const parsed = JSON.parse(userInStorage);
    const [user, setUser] = useState(
        parsed ? parsed.currentSession?.user?.email : ""
    );
    return (
        <div>

            <Navbar>
                <Navbar.Brand>
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={bliss} alt="logo" />
                        </Link>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
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
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search for homes"
                                aria-label="Search for homes"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            </InputGroup.Append>
                            <Link to="/homesearch">
                                <Button variant="outline-secondary">Search</Button>
                            </Link>

                        </InputGroup>
                    </form>
                </div>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/signin">
                            Signed in as:
                        </Link>

                        <Link to="/signin">
                            <a href="#login">{user}</a>
                        </Link>
                        {/* <Button onClick={signOut}>Sign Out</Button> */}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

            {/* <nav>
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
            </nav> */}
        </div>
    )
}
