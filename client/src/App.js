import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import HomeDisplay from "./components/HomeDisplay";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SingleHomeDisplay from "./components/SingleHomeDisplay";
import HomeSearchPage from "./components/HomeSearchPage";
import SingleHome2 from "./components/SingleHome2";
import loghouse from "./components/loghouse";

import "./App.css";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://lekbkbafzntukffwtnpx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk0NDg1OSwiZXhwIjoxOTM5NTIwODU5fQ.GZlazHQsVoxSF4Blz-Kh2I4TWnpRl9pmow0NpeAQpEM"
);

export default function App() {
  const userInStorage = localStorage.getItem("supabase.auth.token");
  const parsed = JSON.parse(userInStorage);
  console.log(parsed);
  const [userFormData, setUserFormData] = useState({});
  const [signInUserFormData, setSignInUserFormData] = useState({});
  const [user, setUser] = useState(
    parsed ? parsed.currentSession?.user?.email : ""
  );
  const signUp = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({
      Username: userFormData.Username,
      firstName: userFormData.firstName,
      lastName: userFormData.lastName,
      email: userFormData.email,
      password: userFormData.password,
    });
    console.log({ user });
  };
  const signIn = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      email: signInUserFormData.email,
      password: signInUserFormData.password,
    });
    console.log({ error });
    console.log({ user });
    console.log({ session });
    if (error) {
      alert(error.message);
    } else {
      setUser(user.email);
    }
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    const refreshPage = () => {
      window.location.reload(false);
    };
    refreshPage();
  };
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={signUp}>
        <input
          name="email"
          onChange={(e) =>
            setUserFormData({
              ...userFormData,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={(e) =>
            setUserFormData({
              ...userFormData,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="password"
        />
        <input type="submit" placeholder="login" />
      </form>
      <h1>Sign In</h1>
      <form onSubmit={signIn}>
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={(e) =>
            setSignInUserFormData({
              ...signInUserFormData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          name="password"
          type="text"
          placeholder="password"
          onChange={(e) =>
            setSignInUserFormData({
              ...signInUserFormData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input type="submit" placeholder="login" />
      </form>
      <h1>Welcome {user}</h1>
      <button onClick={signOut}>Sign Out</button>
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/homedisplay" component={HomeDisplay} />
            <Route path="/contact" component={Contact} />

            <Route exact path="/signin">
              <SignIn
                signIn={signIn}
                signInUserFormData={signInUserFormData}
                setSignInUserFormData={setSignInUserFormData}
              />
            </Route>
            <Route exact path="/signup">
              <SignUp
                signUp={signUp}
                setUserFormData={setUserFormData}
                userFormData={userFormData}
              />
            </Route>
            <Route path="/singlehome" component={SingleHomeDisplay} />
            <Route path="/singlehome2" component={SingleHome2} />
            <Route path="/homesearch" component={HomeSearchPage} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
