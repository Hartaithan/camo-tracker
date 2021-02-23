import "./App.scss";
import React from "react";
import { Route } from "react-router-dom";

// IMPORT PAGES
import MainPage from "./pages/mainPage";
import MasterPage from "./pages/masterPage";
import WeaponPage from "./pages/weaponPage";

// IMPORT COMPONENTS
import Sidebar from "./components/sidebarComponent";

function App() {
	return (
		<div className="tracker">
			<Sidebar />
			<Route exact path="/camo-tracker/">
				<MainPage />
			</Route>
			<Route path="/camo-tracker/dm">
				<MasterPage />
			</Route>
			<Route path="/camo-tracker/da">
				<MasterPage />
			</Route>
			<Route path="/camo-tracker/weapon">
				<WeaponPage />
			</Route>
		</div>
	);
}

export default App;
