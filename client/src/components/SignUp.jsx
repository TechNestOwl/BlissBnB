import React from 'react'

export default function SignUp() {
    return (
        <div>
            <form className="signUpForm" onSubmit={console.log("signed up!")}>
                <h1>Create User Account</h1>
                <input
                    type="text"
                    // value="username"
                    placeholder="Enter new username"
                ></input>
                <input
                    type="email"
                    placeholder="Enter email"
                // value="userEmail"
                ></input>
                <input
                    type="password"
                    // value="userPassword"
                    placeholder="Enter password"
                ></input>
                <input
                    type="password"
                    // value="userPasswordConfirmation"
                    placeholder="Confirm password"
                ></input>
                <button
                    type="submit"
                    className="formBtn"
                >Submit</button>
            </form>
        </div>
    )
}
