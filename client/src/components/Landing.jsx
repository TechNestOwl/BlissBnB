import React from 'react'
import { Button, Jumbotron, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
        </div>
    )
}
