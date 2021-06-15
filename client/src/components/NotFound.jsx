import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="notFound">
            <h2 className="errMessage">Error!</h2>
            <p>This page cannot be found</p>
            <Link to="/">
                Click here to return to the home page
            </Link>
        </div>
    )
}
