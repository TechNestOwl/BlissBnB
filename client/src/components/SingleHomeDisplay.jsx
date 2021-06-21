import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import coastalbeachhouse from "../assets/coastalbeachhouse.jpeg"
import beachHouseInterior1 from "../assets/beahHinterior1.jpeg"
import beachHouseInterior2 from "../assets/beahHinterior2.jpeg"
import { Button, Card } from 'react-bootstrap';
import logo from "../assets/bliss.png"

export default function SingleHomeDisplay() {

    const dispatch = useDispatch();
    const [calDate, setCalDate] = useState("");

    const calDateInput = useSelector(state => state.calReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        { alert("Resrvation Set") };
    }

    return (
        <div>
            <h1>Coastal Beach Home</h1>


            <div className="singleHomeProperty">
                <div className="propertyPictures">
                    <img src={coastalbeachhouse} alt="pictureofhome" height="350px" width="auto"></img>
                    <img src={beachHouseInterior1} alt="pictureofhome" height="200px" width="auto"></img>
                    <img src={beachHouseInterior2} alt="pictureofhome" height="200px" width="auto"></img>
                    {/* <img alt="pictureofhome"></img>
                    <img alt="pictureofhome"></img>
                    <img alt="pictureofhome"></img>
                    <img alt="pictureofhome"></img> */}
                </div>
                <div className="propetyDescription">
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
                    <h4>About this space:</h4>
                    <p>Single family home with Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
            </div>
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
                        <button className="submitBtn" type="submit">Reserve Home</button>
                    </form>

                </div>

            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Coastal Beach Home</Card.Title>
                    <Card.Text>
                        Single family home with Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Card.Text>
                    <Button variant="primary">Book Home</Button>
                </Card.Body>
            </Card>
            <div>
                <br></br>
            </div>
        </div>
    )
}
