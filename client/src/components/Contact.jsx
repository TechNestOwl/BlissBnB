import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form className="contactForm">
                <input type="text" placeholder="Name" required></input>
                <br></br>
                <input type="text" placeholder="Return address" required></input>
                <br></br>
                <input type="text" placeholder="Subject" required></input>
                <br></br>
                <textarea placeholder="Subject" required></textarea>
                <input type="submit" value="Send"></input>
            </form>
        </div>
    )
}
