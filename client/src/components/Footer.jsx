import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="footer">
            <h4 className="footerText">Bliss BnB</h4>
                <ul>
                    <Link to="/contact">
                        <li>Contact Us</li>   
                    </Link>
                </ul>
        </div>
    )
}