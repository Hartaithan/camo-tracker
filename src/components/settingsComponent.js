import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function SettingsComponent() {
	const paths = useLocation().pathname.split("/");
	const [id_mast, id_cat, id_weap] = paths[2].split("_");

	const items = useSelector((state) => state.mainDatabase);
	const sidebarState = useSelector((state) => state.sidebar);
	const dispatch = useDispatch();

	return (
		<div className="tracker_settings" style={{ right: sidebarState.settings ? "0px" : "-300px" }}>
			<div className="tracker_settings_header">
				<div className="tracker_settings_header_title">SETTINGS</div>
				<div className="tracker_settings_header_button" onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}>
					<svg viewBox="0 0 270 270">
						<path d="M166 39c5,2 10,4 15,6l24 -18c5,-3 11,-2 14,1l22 22c4,4 4,10 1,14l-17 25c2,5 4,10 6,15l30 5c5,0 9,5 9,10l0 31c0,5 -4,10 -9,11l-30 5c-2,5 -4,10 -6,15l18 24c3,5 2,11 -1,14l-22 22c-4,4 -10,4 -14,1l-25 -17c-5,2 -10,4 -15,6l-5 30c-1,5 -6,9 -11,9l-31 0c-5,0 -10,-4 -10,-9l-5 -30c-5,-2 -10,-4 -15,-6l-25 17c-4,3 -10,3 -14,-1l-22 -22c-3,-3 -4,-9 -1,-13l18 -25c-3,-5 -5,-10 -6,-15l-30 -5c-5,-1 -9,-6 -9,-11l0 -31c0,-5 4,-10 9,-10l30 -5c1,-6 3,-10 6,-15l-18 -25c-3,-4 -2,-10 2,-14l22 -22c3,-3 9,-4 13,-1l25 18c5,-2 10,-4 15,-6l5 -30c0,-5 5,-9 10,-9l31 0c5,0 10,4 11,9l5 30zm-31 39c-31,0 -57,26 -57,57 0,31 26,57 57,57 31,0 57,-26 57,-57 0,-31 -26,-57 -57,-57z" />
					</svg>
				</div>
			</div>
			<div className="tracker_settings_container">
				<div className="tracker_settings_container_completeweapon">
					<div className="tracker_settings_container_resetweapon_title">COMPLETE WEAPON</div>
					<div className="tracker_settings_container_resetweapon_button" onClick={() => dispatch({ type: "TOGGLE_WEAPON", id_cat: id_cat, id_weap: id_weap, id_mast: id_mast })}>
						DO IT!
					</div>
				</div>
				<div className="tracker_settings_container_resetweapon">
					<div className="tracker_settings_container_resetweapon_title">RESET WEAPON</div>
					<div className="tracker_settings_container_resetweapon_button">DO IT!</div>
				</div>
				<div className="tracker_settings_container_resetall">
					<div className="tracker_settings_container_resetall_title">RESET ALL</div>
					<div className="tracker_settings_container_resetall_button" onClick={() => dispatch({ type: "RESET_ALL" })}>
						DO IT!
					</div>
				</div>
			</div>
		</div>
	);
}

export default SettingsComponent;
