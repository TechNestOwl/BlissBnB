import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { signUpInfo } from "../actions/signUpAction";

export default function SignUp(props) {


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

useEffect(()=>{
    console.log(props.userFormData)
},[])

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: userSignUpForm.email,
            password: userSignUpForm.password,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/signin', requestOptions)
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
            <form className="signUpForm" onSubmit={props.signUp}>
                <h1>Create User Account</h1>
                <input
          name="email"
          onChange={(e) =>
            props.setUserFormData({
              ...props.userFormData,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={(e) =>
            props.setUserFormData({
              ...props.userFormData,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="password"
        />
        <input
                    type="text"
                    
                    onChange={(e) =>
                        props.setUserFormData({
                          ...props.userFormData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    placeholder="Enter new username"
                    name="Username"
                />
                <input
                    type="text"
                    onChange={(e) =>
                        props.setUserFormData({
                          ...props.userFormData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    placeholder="Enter your name"
                    name="firstName"
                />
                <input
                    type="text"
                    onChange={(e) =>
                        props.setUserFormData({
                          ...props.userFormData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    placeholder="Enter your name"
                    name="lastName"/>
        
                <button
                    type="submit"
                    className="formBtn"
                >Submit</button>
            </form>
        </div>
    )
}
