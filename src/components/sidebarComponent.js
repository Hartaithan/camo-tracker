import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Sidebar() {
	const items = useSelector((state) => state.mainDatabase);
	const uiState = useSelector((state) => state.uiState);
	const dispatch = useDispatch();

	function closeSidebar() {
		const width = window.innerWidth;
		if (width <= 768) {
			dispatch({ type: "TOGGLE_SIDEBAR" });
		}
	}

	function arrow(state) {
		return (
			<svg className="tracker_arrow" style={state ? {transform: "rotate(0deg)"} : {transform: "rotate(90deg)"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M21 12l-18 12v-24z" />
			</svg>
		);
	}

	function CollapsibleList(props) {
		const collapsibleId = props.mast === "dm" ? uiState.collapsibleIsOpen.dm : uiState.collapsibleIsOpen.da;

		return (
			<div className="tracker_sidebar_container_collapse">
				{items.map((item, index) => (
					<div key={props.mast + item.name}>
						<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: props.mast, id: index + 1 })} open={collapsibleId[index + 1] ? true : false} trigger={collapsibleId[index + 1] ? arrow(true) : arrow(false)} triggerSibling={() => <span> {item.name.toUpperCase()}</span>} transitionTime={100}>
							{item.weapons.map((weapon) => (
								<div key={props.mast + weapon.name}>
									<span>
										&emsp;&emsp;
										<Link to={"/weapon/" + props.mast + "_" + item.id + "_" + weapon.id} onClick={closeSidebar}>
											{weapon.name.toUpperCase()}
										</Link>
									</span>
								</div>
							))}
						</Collapsible>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="tracker_sidebar" style={{ left: uiState.isOpen ? "0px" : "-300px" }}>
			<div className="tracker_sidebar_header">
				<div className="tracker_sidebar_header_menu" onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
					</svg>
				</div>
				<div className="tracker_sidebar_header_link">
					<Link to="/" onClick={closeSidebar}>
						CAMO TRACKER
					</Link>
				</div>
			</div>
			<div className="tracker_sidebar_tabview">
				<div className="tracker_sidebar_tabview_tab" onClick={() => dispatch({ type: "TOGGLE_TAB", mast: "dm" })}>
					<div className="tracker_sidebar_tabview_tab_title">
						<Link to="/dm" onClick={closeSidebar}>
							DM
						</Link>
					</div>
					<div className="tracker_sidebar_tabview_tab_line" style={{ opacity: uiState.isActive === "dm" ? "1" : "0" }}></div>
				</div>
				<div className="tracker_sidebar_tabview_tab" onClick={() => dispatch({ type: "TOGGLE_TAB", mast: "da" })}>
					<div className="tracker_sidebar_tabview_tab_title">
						<Link to="/da" onClick={closeSidebar}>
							DA
						</Link>
					</div>
					<div className="tracker_sidebar_tabview_tab_line" style={{ opacity: uiState.isActive === "da" ? "1" : "0" }}></div>
				</div>
			</div>
			<div className="tracker_sidebar_container">{uiState.isActive === "dm" ? <CollapsibleList mast="dm" /> : <CollapsibleList mast="da" />}</div>
		</div>
	);
}

export default Sidebar;
