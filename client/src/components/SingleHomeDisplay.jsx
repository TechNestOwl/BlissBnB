import React, { useState } from 'react'
import { Button, Container, Row, Col, Card, Image, ListGroup, Carousel } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import lakehome from "../assets/lakehome.png"
import lakebackyard from "../assets/lakebackyard.jpeg"
import lakejetski from "../assets/lakejetski.jpeg"
import logo from "../assets/bliss.png"
import lakehost from "../assets/lakehost.jpeg";



export default function SingleHome2() {


    // const dispatch = useDispatch();
    // const [calDate, setCalDate] = useState("");

    // const calDateInput = useSelector(state => state.calReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Resrvation date set");

    }


    return (
        <div>
            <Container className="singleHomeParentContainer">
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Col sm={10}>
                    <div className="singleHomePageCenter">

                        <div className="singleHomePhotoContainer">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={lakehome}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Welcome Home</h3>
                                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={lakebackyard}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Lakefront Access</h3>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={lakejetski}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Jet Ski!</h3>
                                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                        </div>


                        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                        <Row>
                            <Col sm={8}>
                                <h4>About this space:</h4>
                                <p>Single family home with with beach front access and loads of lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            </Col>
                            <Col sm={4}>
                                {/* <h4>About the home</h4>
                                <p>6 Guests</p>
                                <p>3 Bedroom</p>
                                <p>2 Bath</p> */}
                                <div className="ammenityListContainer">
                                    <h4>Amenities</h4>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Hottub</ListGroup.Item>
                                        <ListGroup.Item>Firepit</ListGroup.Item>
                                        <ListGroup.Item>Washer/Dryer</ListGroup.Item>
                                        <ListGroup.Item>Full stone fireplace</ListGroup.Item>
                                        <ListGroup.Item>Full kitchen</ListGroup.Item>
                                        <ListGroup.Item>Beach Access</ListGroup.Item>
                                        <ListGroup.Item>Charcoal BBQ grill</ListGroup.Item>
                                    </ListGroup>

                                </div>
                            </Col>

                        </Row>

                        {/* Columns are always 50% wide, on mobile and desktop */}
                        <Row>
                            <Col sm={true}>
                                <div className="reservationCard">
                                    <div className="reservationCal">
                                        <div>
                                            <Calendar
                                            // value={calDate}
                                            // onChange={e => setCalDate(e.target.value)} 
                                            />
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
                            <Col s={true}>
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
                    </div>
                </Col>
                <Col sm={2}>
                    <div className="singleHomePageRight">
                        <Col lg={true} md={4}>
                            <Image src={lakehost} roundedCircle />
                            <h4>Host:</h4>
                            <h5>Rick Sanchez</h5>
                            <br></br>
                            <hr></hr>
                            <h4>About the home</h4>
                            <div className="reservationPrice">
                                <span className="slashedPriced">$189 </span>
                                <span> $133 / night</span>
                            </div>
                            <p>6 Guests</p>
                            <p>3 Bedroom</p>
                            <p>2 Bath</p>
                        </Col>
                    </div>
                </Col>
            </Container>
        </div>
    )
}
