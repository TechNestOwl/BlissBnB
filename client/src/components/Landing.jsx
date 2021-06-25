import React from 'react'
import { Image, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import landingPhoto from "../assets/landingPhoto.jpg"
import JetSki from "../assets/lakejetski.jpeg"
// import outdoorgetaway from "../assets/outdoorgetaway.jpeg"
import petsallowed from "../assets/petsallowed.jpeg"
import uniquestays from "../assets/uniquestays.jpeg"
import entirehome from "../assets/entirehome.jpeg"
export default function Landing() {
    return (
        <div>
            {/* <h1>Landing Page</h1> */}
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to Bliss</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <Link to="/homesearch">
                        <Button variant="outline-primary">Search Homes</Button>
                    </Link>
                </Container>
            </Jumbotron>
            <div className="landingBackgroundPhoto">
                <Image src={landingPhoto} fluid />
            </div>
            <div className="landingGetawayBanner">
                <Jumbotron fluid>
                    <h2 className="liveAnywhere">Live Anywhere</h2>
                    <hr></hr>
                    <Container>
                        <Row>
                            {/* <Col>
                                <Image src={JetSki} fluid />
                                <h3> Outdoor Getaways</h3>
                            </Col> */}
                            <Col>
                                <Image src={uniquestays} fluid className="landigCardPhotos" />
                                <h3 className="landingCardText">Unique Stays</h3>
                            </Col>
                            <Col>
                                <Image src={entirehome} fluid className="landigCardPhotos" />
                                <h3>Entire Homes</h3>
                            </Col>
                            <Col>
                                <Image src={petsallowed} fluid className="landigCardPhotos" />
                                <h3>Pets Allowd</h3>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}
