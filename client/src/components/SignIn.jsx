import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { signInInfo } from '../actions/signInAction';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
// import Landing from './Landing';


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
            <form className="signUpForm" onSubmit={props.signIn}>
                <h1>Sign In</h1>
                <input
          name="email"
          type="text"
          placeholder="email"
          onChange={(e) =>
            props.setSignInUserFormData({
              ...props.signInUserFormData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          name="password"
          type="text"
          placeholder="password"
          onChange={(e) =>
            props.setSignInUserFormData({
              ...props.signInUserFormData,
              [e.target.name]: e.target.value,
            })
          }
        />

                {/* <button type="submit">Submit</button> */}
                <Button type="submit" variant="primary" className="searchFormBtn">Sign In</Button>

                <h5>Don't have a user log-in?</h5>
                
                {/* {signIn.map((user) => (
                <Landing user={user} />
                ))} */}

                <Link to="/signup">
                <p>Continue here to sign up</p>
                    
                </Link>

            </form>

        </div>
    )
}
