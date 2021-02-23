import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import combineReducer from "./reducers";
import { Provider } from "react-redux";
import { loadState, saveState } from "./localStorage";
import { Context } from "./context";

const persistedState = loadState();
const store = createStore(combineReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
	saveState(store.getState());
});

function toggleSidebar(sidebar) {
	console.log("index: " + sidebar)
	if (sidebar === true) {
		return "300px";
	} else if (sidebar === false) {
		return "0px";
	}
}

ReactDOM.render(
	<Context.Provider value={{ toggleSidebar }}>
		<Provider store={store}>
			<BrowserRouter basename="/camo-tracker">
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</Provider>
	</Context.Provider>,
	document.getElementById("root")
);
