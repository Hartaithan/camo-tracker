import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Sidebar() {
	const items = useSelector((state) => state.mainDatabase);
	const sidebarState = useSelector((state) => state.sidebar);
	const dispatch = useDispatch();

	return (
		<div className="tracker_sidebar" style={{ left: sidebarState.isOpen ? "0px" : "-300px" }}>
			<div className="tracker_sidebar_header">
				<div className="tracker_sidebar_header_menu" onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
					</svg>
				</div>
				<div className="tracker_sidebar_header_link">
					<Link to="/camo-tracker/">CAMO TRACKER</Link>
				</div>
			</div>
			<div className="tracker_sidebar_container">
				<div className="tracker_sidebar_container_collapse">
					<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "dm", id: 0 })} open={sidebarState.collapsibleIsOpen.dm[0] ? true : false} trigger="▼ " triggerSibling={() => <Link to="/dm">DM ULTRA</Link>} transitionTime={100}>
						{items.map((item, index) => (
							<div key={"dm" + item.name}>
								<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "dm", id: index + 1 })} open={sidebarState.collapsibleIsOpen.dm[index + 1] ? true : false} trigger="&emsp;▼ " triggerSibling={() => <span>{item.name.toUpperCase()}</span>} transitionTime={100}>
									{item.weapons.map((weapon) => (
										<div key={"dm" + weapon.name}>
											<span>
												&emsp;&emsp;&emsp;<Link to={"/weapon/" + "dm_" + item.id + "_" + weapon.id}>{weapon.name.toUpperCase()}</Link>
											</span>
										</div>
									))}
								</Collapsible>
							</div>
						))}
					</Collapsible>
				</div>
				<div className="tracker_sidebar_container_collapse">
					<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "da", id: 0 })} open={sidebarState.collapsibleIsOpen.da[0] ? true : false} trigger="▼ " triggerSibling={() => <Link to="/da">DARK AETHER</Link>} transitionTime={100}>
						{items.map((item, index) => (
							<div key={"da" + item.name}>
								<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "da", id: index + 1 })} open={sidebarState.collapsibleIsOpen.da[index + 1] ? true : false} trigger="&emsp;▼ " triggerSibling={() => <span>{item.name.toUpperCase()}</span>} transitionTime={100}>
									{item.weapons.map((weapon) => (
										<div key={"da" + weapon.name}>
											<span>
												&emsp;&emsp;&emsp;<Link to={"/weapon/" + "da_" + item.id + "_" + weapon.id}>{weapon.name.toUpperCase()}</Link>
											</span>
										</div>
									))}
								</Collapsible>
							</div>
						))}
					</Collapsible>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
