import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore} from "redux";
import "mapbox-gl/dist/mapbox-gl.css";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
