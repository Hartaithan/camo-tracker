import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import combineReducer from "./reducers";
import { Provider } from "react-redux";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(combineReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router basename={process.env.PUBLIC_URL}>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
