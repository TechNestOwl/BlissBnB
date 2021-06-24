import React from 'react';
import { Link } from 'react-router-dom'
import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react'


export default function NotFound() {

    const [show, setShow] = useState(true);
    if (show) {
        return (
            <div>
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Alert>
                <div className="notFound">
                    <h2 className="errMessage">Error!</h2>
                    <p>This page cannot be found</p>
                    <Link to="/">
                        Click here to return to the home page
                    </Link>
                </div>
            </div>
        );
    }
    return <Button className="notFoundBtn" onClick={() => setShow(true)}>Show Error of your ways</Button>;
}




