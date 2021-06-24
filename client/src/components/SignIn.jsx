import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { signInInfo } from '../actions/signInAction';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';


export default function SignIn(props) {

    const dispatch = useDispatch();
    const [userSignInForm, setUserSignIn] = useState({
        Username: "",
        password: "",
    });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Username: userSignInForm.Username,
            password: userSignInForm.password,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/signup', requestOptions)
            .then(response => response.json())
        // .then(data => setPostId(data.id));
        // dispatch(signUpInfo())
        // console.log(signUpInfo);
    }

    const handleChange = (e) => {
        setUserSignIn({
            ...userSignInForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form className="signUpForm" onSubmit={e => { handleSubmit(e) }}>
                <h1>Sign In</h1>
                <input
                    type="text"
                    value={userSignInForm.Username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    name="Username"
                />
                <input
                    type="password"
                    value={userSignInForm.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    name="password"
                ></input>

                {/* <button type="submit">Submit</button> */}
                <Button type="submit" className="submitButton">Submit</Button>
                <h5>Don't have a user log-in?</h5>
                <p>Continue here to sign up</p>
                <Link to="/signup">
                    <button href="#" className="submitButton">Sign Up</button>
                </Link>

            </form>

        </div>
    )
}
