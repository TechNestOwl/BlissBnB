import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInInfo } from '../actions/signInAction';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Landing from './Landing';


export default function SignIn(props) {

    const dispatch = useDispatch();
    const [usernameSignIn, setUsernameSignIn] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const signIn = useSelector((state) => state.signIn);
console.log(signIn)
    // const setUsername = useSelector(state => state.setUsername);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ usernameSignIn, userPassword });
        signInInfo(dispatch, setUsernameSignIn);
    }

    return (
        <div>
            <form className="signUpForm" onSubmit={e => { handleSubmit(e) }}>
                <h1>Sign In</h1>
                <input
                    type="text"
                    // value={usernameSignIn}
                    onChange={(e) => setUsernameSignIn(e.target.value)}
                    placeholder="Enter new username"
                />
                <input
                    type="password"
                    // value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Enter password"
                ></input>

                {/* <button type="submit">Submit</button> */}
                <Button onClick={(e)=>signInInfo(dispatch, props.signIn)} variant="primary" className="searchFormBtn">Sign In</Button>

                <h5>Don't have a user log-in?</h5>
                
                {signIn.map((user) => (
        <Landing user={user} />
      ))}

                <Link to="/signup">
                <p>Continue here to sign up</p>
                    
                </Link>

            </form>

        </div>
    )
}
