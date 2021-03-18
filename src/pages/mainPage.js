import React from "react";
import { useSelector } from "react-redux";
import CircleBar from "../components/circleBar";
import Header from "../components/headerComponent";

function MainPage() {
	const db_main = useSelector((state) => state.mainDatabase);
	const uiState = useSelector((state) => state.uiState);

	function calcProc(id_mast) {
		let n = 0;
		let length = 0;
		db_main.map((categ) => {
			categ.weapons.map((weapon) => {
				n = n + weapon.camos[id_mast].filter(Boolean).length;
				length = length + weapon.camos[id_mast].length;
			});
		});
		const percentage = (n / length) * 100;
		return percentage;
	}

	return (
		<div className="tracker_container" style={{ marginLeft: uiState.isOpen ? "300px" : "0px" }}>
			<Header/>
			<div className="tracker_main">
				<CircleBar textColor="#e4e4e4" trailStrokeColor="#1f1f1f" strokeColor="#FFC400" percentage={calcProc("dm")} innerText="DM ULTRA" maxSize="60vh" speed="10" />
				<CircleBar textColor="#e4e4e4" trailStrokeColor="#1f1f1f" strokeColor="#FFC400" percentage={calcProc("da")} innerText="DARK AETHER" maxSize="60vh" speed="10" />
			</div>
		</div>
	);
}

export default MainPage;
