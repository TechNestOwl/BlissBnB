import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { searchPageAction } from '../actions/searchPageAction'

export default function HomeSearchPage() {
    return (
        <div>
            <div className="homeSearchFormContainer">
                <form className="homeSearchForm">

                    <Form className="priceRangeForm">
                        <Form.Group controlId="formPriceRange">
                            <Form.Label>Price Range</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                    </Form>
                    <Form.Group controlId="controlInput1">
                        <Form.Label>Search City</Form.Label>
                        <Form.Control type="email" placeholder="Enter City" />
                    </Form.Group>
                    <Form.Group controlId="controlSelect1">
                        <Form.Label>Number of bedrooms</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="controlSelect2">
                        <Form.Label>Select Amenities</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>Pool</option>
                            <option>Full Kitchen</option>
                            <option>Fireplace</option>
                            <option>Scenic Views</option>
                            <option>Hot Tub</option>
                            <option>Beach Access</option>
                            <option>Recreation Room</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="controlTextarea1">
                        <Form.Label>Add key words to search:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button onClick={()=>searchPageAction} variant="primary" className="searchFormBtn">Search</Button>
                </form>
            </div>
        </div>
    )
}
