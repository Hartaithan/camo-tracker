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
			<Link className="tracker_sidebar_header" to={process.env.PUBLIC_URL + '/'}>
				CAMO TRACKER
			</Link>
			<div className="tracker_sidebar_container">
				<div className="tracker_sidebar_container_collapse">
					<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "dm", id: 0 })} open={sidebarState.collapsibleIsOpen.dm[0] ? true : false} trigger="▼ " triggerSibling={() => <Link to={process.env.PUBLIC_URL + '/dm'}>DM ULTRA</Link>} transitionTime={100}>
						{items.map((item, index) => (
							<div key={"dm" + item.name}>
								<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "dm", id: index + 1 })} open={sidebarState.collapsibleIsOpen.dm[index + 1] ? true : false} trigger="&emsp;▼ " triggerSibling={() => <span>{item.name.toUpperCase()}</span>} transitionTime={100}>
									{item.weapons.map((weapon) => (
										<div key={"dm" + weapon.name}>
											<span>
												&emsp;&emsp;&emsp;<Link to={process.env.PUBLIC_URL + "/weapon/" + "dm_" + item.id + "_" + weapon.id}>{weapon.name.toUpperCase()}</Link>
											</span>
										</div>
									))}
								</Collapsible>
							</div>
						))}
					</Collapsible>
				</div>
				<div className="tracker_sidebar_container_collapse">
					<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "da", id: 0 })} open={sidebarState.collapsibleIsOpen.da[0] ? true : false} trigger="▼ " triggerSibling={() => <Link to={process.env.PUBLIC_URL + '/da'}>DARK AETHER</Link>} transitionTime={100}>
						{items.map((item, index) => (
							<div key={"da" + item.name}>
								<Collapsible handleTriggerClick={() => dispatch({ type: "TOGGLE_COLLAPSIBLE", mast: "da", id: index + 1 })} open={sidebarState.collapsibleIsOpen.da[index + 1] ? true : false} trigger="&emsp;▼ " triggerSibling={() => <span>{item.name.toUpperCase()}</span>} transitionTime={100}>
									{item.weapons.map((weapon) => (
										<div key={"da" + weapon.name}>
											<span>
												&emsp;&emsp;&emsp;<Link to={process.env.PUBLIC_URL + "/weapon/" + "da_" + item.id + "_" + weapon.id}>{weapon.name.toUpperCase()}</Link>
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
