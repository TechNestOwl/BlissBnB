import React from 'react'
// import { displayHomes } from "../action-creators/homesActions.js";
// import { useDispatch, useSelector } from "react-redux";
// import { Data } from "../Data.js"
// import { HomesContainer, HomesDisplayContainer } from "./StyledHomes.js";
import Map from "./Map.jsx";
// import "../styles/Homes.css";
// import HomeCard from "./HomeCard.jsx";
import { Button, Card } from 'react-bootstrap'
import beachhouse from "../assets/coastalbeachhouse.jpeg";
import loghouse from "../assets/loghome.jpeg";
import lakehouse from "../assets/lakehome.png";
import { Link } from 'react-router-dom';

export default function Homes() {
    return (
        <div className="homes__container">
            <div className="map__container"><Map /></div>
            <div className="homeCardContainer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={beachhouse} />
                    <Card.Body>
                        <Card.Title>Coastal Beach Home</Card.Title>
                        <Card.Text>
                            Single family home with beach from access and lots of lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                        <Link to="/singlehome2">
                            <Button variant="primary">Book Home</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={loghouse} />
                    <Card.Body>
                        <Card.Title>Forest Log Cabin</Card.Title>
                        <Card.Text>
                            Single family home with beach from access and lots of lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                        <Link to="/singlehome2">
                            <Button variant="primary">Book Home</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={lakehouse} />
                    <Card.Body>
                        <Card.Title>Lakefront Home</Card.Title>
                        <Card.Text>
                            Single family home with beach from access and lots of lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                        <Link to="/singlehome2">
                            <Button variant="primary">Book Home</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
        </div>

    )
}
