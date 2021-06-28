import React, { useState } from 'react'

import { useEffect } from 'react';

import { OverlayTrigger, Button, Container, Row, Col, Card, Tooltip, Image, ListGroup, Carousel, Modal, Media, InputGroup, FormControl } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';

import Calendar from 'react-calendar';
import coastalbeachhouse from "../assets/coastalbeachhouse.jpeg"
import beachHouseInterior1 from "../assets/beahHinterior1.jpeg"
import beachHouseInterior2 from "../assets/beahHinterior2.jpeg"
import logo from "../assets/bliss.png"
import hostHeadshot from "../assets/hostImage.jpeg";
import { useParams } from 'react-router';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    "https://lekbkbafzntukffwtnpx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk0NDg1OSwiZXhwIjoxOTM5NTIwODU5fQ.GZlazHQsVoxSF4Blz-Kh2I4TWnpRl9pmow0NpeAQpEM"
);


export default function SingleHome2() {


    const { id } = useParams()
    const [homeData, setHomeData] = useState([""]);

    const userInStorage = localStorage.getItem("supabase.auth.token");
    const parsed = JSON.parse(userInStorage);
    const [user, setUser] = useState(
        parsed ? parsed.currentSession?.user?.email : ""
    );
    const [show, setShow] = useState(false);

    // const dispatch = useDispatch();
    // const [calDate, setCalDate] = useState("");

    // const calDateInput = useSelector(state => state.calReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Resrvation date set");

    }


    useEffect(() => {
        const getHomeData = () => {
            // e.preventDefault();
            supabase
                .from('Homes')
                .select("*")
                // .filter("id","1")
                .then(data => setHomeData(data.data))
                .catch(console.error)
            console.log("Testing")
        };
        getHomeData()
    }, [])
    console.log()
    homeData.sort(function (a, b) {
        return (a.id - b.id)
    })
    console.log(id)

    //    console.log(homeData[id].URL)


    const postComment = () => {
        alert("Comments are currentlyu disabled")
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Don't click me!
        </Tooltip>
    );

    return (
        <div>

            {
                homeData === [""] ? ("") :
                    (<Container className="singleHomeParentContainer">

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
                            {/* <Row>
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
                                <h6>User: {user}</h6>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter comment.."
                                        aria-label="userComment"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}
                                        >
                                            <Button variant="primary" onClick={postComment}>Post</Button>
                                        </OverlayTrigger>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>


                            {/* Columns are always 50% wide, on mobile and desktop */}
                            <div className="reservationsContainer">
                                <Row>
                                    <Col sm={true}>
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
                                                <span> 0 </span>
                                                <button>+</button>
                                                <br></br>
                                                
                                                <button className="submitBtn" type="submit">Add Date</button>
                                            </form>
                                        </div>
                                    </Col>
                                    <div className="reservationCard">
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
                                                    <div>
                                                        <Button variant="primary" onClick={() => setShow(true)}>
                                                            Reserve Home
                                                        </Button>
                                                        <Modal
                                                            show={show}
                                                            onHide={() => setShow(false)}
                                                            dialogClassName="modal-90w"
                                                            aria-labelledby="example-custom-modal-styling-title"
                                                        >
                                                            <Modal.Header closeButton>
                                                                <Modal.Title id="Cannot Reserve">
                                                                    Home reservations are not currently available
                                                                </Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <p>
                                                                    Single family home with with beach front access and loads of lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                                </p>
                                                            </Modal.Body>
                                                        </Modal>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </div>
                                </Row>
                            </div>
                        </div>
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
                                </Col>
                            </div>
                        </Col>
                    </Container>
                    )}


        </div>

    )
}
