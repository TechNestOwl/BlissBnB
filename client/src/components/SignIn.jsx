import React from 'react'

export default function SignIn() {
    return (
        <div>
            <h1>Sign In</h1>
            <form className="signInForm" onSubmit={console.log("signed in!")}>

                <input
                type="text"
                value="username"
                ></input>

                <input
                type="password"
                value="userPassword"
                ></input>

                <button type="submit">Submit</button>
            </form>            
            <h5>Don't have a user log-in?</h5>
            <p>Continue here to sign up</p>
            <button href="#">Sign Up</button>
            
        </div>
    )
}
