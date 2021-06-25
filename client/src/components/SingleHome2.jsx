import React, { useState } from 'react'
import { Button, Container, Row, Col, Card, Image, ListGroup, Carousel, Media, InputGroup, FormControl } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import coastalbeachhouse from "../assets/coastalbeachhouse.jpeg"
import beachHouseInterior1 from "../assets/beahHinterior1.jpeg"
import beachHouseInterior2 from "../assets/beahHinterior2.jpeg"
import logo from "../assets/bliss.png"
import hostHeadshot from "../assets/hostImage.jpeg";



export default function SingleHome2() {


    // const dispatch = useDispatch();
    // const [calDate, setCalDate] = useState("");

    // const calDateInput = useSelector(state => state.calReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Resrvation date set");

    }
    const postComment = () => {
        alert("Comments are currentlyu disabled")
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
                                        src={coastalbeachhouse}
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
                                        src={beachHouseInterior1}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Living Room Views</h3>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={beachHouseInterior2}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Gourmet Kitchen</h3>
                                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                        </div>


                        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                        <div className="aboutHomeContainer">
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
                        </div>
                        <div className="commentsSection">
                            <h3>Comments:</h3>
                            <Media>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={hostHeadshot}
                                    alt="Generic placeholder"
                                    style={{ borderRadius: 30 }}
                                />
                                <Media.Body>
                                    <h5>Welcome!</h5>
                                    <p>
                                        This is my lovely home with renovated everything. Herea are details, Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter comment.."
                                    aria-label="userComment"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={postComment}>Post</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>


                        {/* Columns are always 50% wide, on mobile and desktop */}
                        <div className="reservationsContainer">
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
                                        {/* <Card.Img variant="top" src={logo} /> */}
                                        <Card.Body>
                                            <Card.Title>Home Reservation</Card.Title>
                                            <Card.Text>
                                                To reserve this home you must... lots of lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.
                                            </Card.Text>
                                            <Button variant="primary">Book Home</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className="singleHomePageRight">
                        <Col lg={true} md={4}>
                            <Image src={hostHeadshot} roundedCircle />
                            <h4>Host:</h4>
                            <h5>Gabriella Parks</h5>
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
        </div >
    )
}
