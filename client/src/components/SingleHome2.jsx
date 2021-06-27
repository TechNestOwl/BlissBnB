import React, { useState } from 'react'
import { Button, Container, Row, Col, Card, Image, ListGroup, Carousel } from 'react-bootstrap'
import { useEffect } from 'react';
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

const {id} = useParams()
const [homeData, setHomeData]= useState([""]);
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
            .then(data=>setHomeData(data.data))
            .catch(console.error)
            console.log("Testing")
          };
          getHomeData()
    },[])
console.log()
    homeData.sort(function(a,b){
        return(a.id-b.id)
    })
   console.log(id)
  
//    console.log(homeData[id].URL)

    return (
        <div>
            
                {
                    homeData === [""] ? (""):
                    (<Container className="singleHomeParentContainer">
                <Col sm={10}>
                <div className="singleHomePageCenter">

                    <div className="singleHomePhotoContainer">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ coastalbeachhouse}
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
                                {/* <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Coastal Beach Home</Card.Title>
                                    <Card.Text>
                                        Single family home with beach from access and lots of lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Card.Text> */}
                                    <Button variant="primary">Book Home</Button>
                                {/* </Card.Body> */}
                            </Card>
                        </Col>
                    </Row>
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
            </Container>  )}
                
            
        </div>
    )
}
