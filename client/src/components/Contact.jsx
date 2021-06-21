import React from 'react'

export default function Contact() {
    return (
        <div>
            <form className="contactForm">
                <h1>Contact Us</h1>
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
