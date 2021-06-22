import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUpInfo } from "../actions/signUpAction";

export default function SignUp() {




    const dispatch = useDispatch();
    const [userSignUpForm, setUserSignUp] = useState({
        Username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");
    // const setUserSignUp = useSelector(state => state.signUpReducer);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Username: userSignUpForm.Username,
            firstName: userSignUpForm.firstName,
            lastName: userSignUpForm.lastName,
            email: userSignUpForm.email,
            password: userSignUpForm.password,
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
        setUserSignUp({
            ...userSignUpForm,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form className="signUpForm" onSubmit={e => { handleSubmit(e) }}>
                <h1>Create User Account</h1>
                <input
                    type="text"
                    value={userSignUpForm.Username}
                    onChange={handleChange}
                    placeholder="Enter new username"
                    name="Username"
                />
                <input
                    type="text"
                    value={userSignUpForm.firstName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    name="firstName"
                />
                <input
                    type="text"
                    value={userSignUpForm.lastName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    name="lastName"
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    value={userSignUpForm.email}
                    onChange={handleChange}
                    name="email"
                ></input>
                <input
                    type="password"
                    value={userSignUpForm.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    name="password"
                ></input>
                <button
                    type="submit"
                    className="formBtn"
                >Submit</button>
            </form>
        </div>
    )
}
