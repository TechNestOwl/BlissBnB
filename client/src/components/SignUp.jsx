// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { signUpInfo } from "../actions/signUpAction";


// export default function SignUp() {

//     const dispatch = useDispatch();
//     const [usernameSignUp, setUsernameSignUp] = useState("");
//     const [userEmail, setUserEmail] = useState("");
//     const [userPassword, setUserPassword] = useState("");

//     const setUserSignUp = useSelector(state => state.signUpReducer);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({ usernameSignUp });
//         signUpInfo(dispatch, setUsernameSignUp);
//     }

//     return (
//         <div>
//             <form className="signUpForm" onSubmit={e => { handleSubmit(e) }}>
//                 <h1>Create User Account</h1>
//                 <input
//                     type="text"
//                     value={usernameSignUp}
//                     placeholder="Enter new username"
//                 ></input>
//                 <input
//                     type="email"
//                     placeholder="Enter email"
//                     value={userEmail}
//                 ></input>
//                 <input
//                     type="password"
//                     value={userPassword}
//                     placeholder="Enter password"
//                 ></input>
//                 <input
//                     type="password"
//                     // value="userPasswordConfirmation"
//                     placeholder="Confirm password"
//                 ></input>
//                 <button
//                     type="submit"
//                     className="formBtn"
//                 >Submit</button>
//             </form>
//         </div>
//     )
// }
