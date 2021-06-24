import React, { useEffect, useState } from 'react'
// import { displayHomes } from "../action-creators/homesActions.js";
// import { useDispatch, useSelector } from "react-redux";
// import { Data } from "../Data.js"
// import { HomesContainer, HomesDisplayContainer } from "./StyledHomes.js";
import Map from "./Map.jsx";
// import "../styles/Homes.css";
// import HomeCard from "./HomeCard.jsx";
import { Button, Card, Badge, Jumbotron, Container, Row, Col } from 'react-bootstrap'
import beachhouse from "../assets/coastalbeachhouse.jpeg";
import loghouse from "../assets/loghome.jpeg";
import lakehouse from "../assets/lakehome.png";
import { Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import { useDispatch } from "react-redux"
const supabase = createClient(
    "https://lekbkbafzntukffwtnpx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk0NDg1OSwiZXhwIjoxOTM5NTIwODU5fQ.GZlazHQsVoxSF4Blz-Kh2I4TWnpRl9pmow0NpeAQpEM"
);

export default function Homes() {
    const [homes, setHomes] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchHomes = async () => {
            const { data, error } = await supabase
                .from('Homes')
                .select()
            setHomes(data)
            dispatch({ type: "DISPLAY_HOMES", payload: data })
        }
        fetchHomes()

    }, [])
    return (
        <div className="homes__container">
            <Container>
                <Row>

                    <Col md={true}>
                        <div>
                            <Map />
                        </div>
                    </Col>

                    <Col lg={true}>
                        <div className="homeCardContainer">
                            {homes.map(home => {

                                return (
                                    <Card style={{ width: "20rem", height: "800px" }}>
                                        <Card.Img variant="top" src={beachhouse} />
                                        <Card.Body>
                                            <Card.Title>
                                                {/* // title */}
                                                {home.Property_Name}
                                                {/* // title filler text*/}
                                                <Badge variant="secondary">
                                                    {/* {home.Other} */}
                                                </Badge>
                                            </Card.Title>
                                            {/* // description */}
                                            <Card.Text>{home.Description}</Card.Text>
                                            <Link to="/singlehome2">
                                                <Button variant="primary">Book Home</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                );
                            })}

                            {/* <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={loghouse} />
                                <Card.Body>
                                    <Card.Title>Forest Log Cabin</Card.Title>
                                    <Card.Text>
                                        Single family cottage with hiking trail access and lots of lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                    <Link to="/loghouse">
                                        <Button variant="primary">Book Home</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={lakehouse} />
                                <Card.Body>
                                    <Card.Title>Lakefront Home</Card.Title>
                                    <Card.Text>
                                        Single family home with lake front access and lots of lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                    <Link to="/lakehouse">
                                        <Button variant="primary">Book Home</Button>
                                    </Link>
                                </Card.Body>
                            </Card> */}
                        </div>

                    </Col>

                </Row>
            </Container>
        </div >
    );
}
