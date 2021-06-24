import React from "react";
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

export default function App() {
	return (
		<div>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/homedisplay" component={HomeDisplay} />
					<Route path="/contact" component={Contact} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/lakehouse" component={SingleHomeDisplay} />
					<Route path="/singlehome2" component={SingleHome2} />
					<Route path="/loghouse" component={loghouse} />
					<Route path="/homesearch" component={HomeSearchPage} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
