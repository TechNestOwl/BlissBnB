import React, { useState } from 'react'
import { Button, Container, Row, Col, Card, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import coastalbeachhouse from "../assets/coastalbeachhouse.jpeg"
import beachHouseInterior1 from "../assets/beahHinterior1.jpeg"
import beachHouseInterior2 from "../assets/beahHinterior2.jpeg"
import logo from "../assets/bliss.png"
import hostHeadshot from "../assets/hostImage.jpeg";



export default function SingleHome2() {


    const dispatch = useDispatch();
    const [calDate, setCalDate] = useState("");

    const calDateInput = useSelector(state => state.calReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        { alert("Resrvation Set") };
    }


    return (
        <div>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={8}>
                        <div className="propertyPictures">
                            <img src={coastalbeachhouse} alt="pictureofhome" height="350px" width="auto"></img>

                            {/* <img alt="pictureofhome"></img>
                    <img alt="pictureofhome"></img>
                    <img alt="pictureofhome"></img>
                    <img alt="pictureofhome"></img> */}
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <img src={beachHouseInterior1} alt="pictureofhome" height="200px" width="auto"></img>
                        <img src={beachHouseInterior2} alt="pictureofhome" height="200px" width="auto"></img>
                    </Col>
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    <Col xs={6} md={4}>
                        <h4>About this space:</h4>
                        <p>Single family home with with beach front access and loads of lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h4>About the home</h4>
                        <p>6 Guests</p>
                        <p>3 Bedroom</p>
                        <p>2 Bath</p>
                        <ul className="ammenityList">
                            <h4>Amenities</h4>
                            <li>Hottub</li>
                            <li>Firepit</li>
                            <li>Beach Access</li>
                            <li>Big Screen TV</li>
                            <li>Washer/Dryer</li>
                            <li>Stacked stone gas fireplace</li>
                            <li>Full kitchen</li>
                            <li>Charcoal BBQ grill</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4}>

                        <Image src={hostHeadshot} roundedCircle />
                        <h4>Host:</h4>
                        <h5>Gabriella Parks</h5>
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6}>
                        <div className="reservationCard">
                            <div className="reservationPrice">
                                <span className="slashedPriced">$189 </span>
                                <span> $133 / night</span>
                            </div>
                            <div className="reservationCal">
                                <div>
                                    <Calendar
                                        // value={calDate}
                                        onChange={e => setCalDate(e.target.value)} />
                                </div>
                                <form onSubmit={handleSubmit} className="reservatinForm">
                                    <p>Guests:</p>
                                    <button>-</button>
                                    <span >0</span>
                                    <button>+</button>
                                    <button className="submitBtn" type="submit">Add Date</button>
                                </form>

                            </div>

                        </div>
                    </Col>
                    <Col xs={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Coastal Beach Home</Card.Title>
                                <Card.Text>
                                    Single family home with beach from access and lots of lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <Button variant="primary">Book Home</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
