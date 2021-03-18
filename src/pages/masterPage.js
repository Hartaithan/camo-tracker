import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Collapsible from "react-collapsible";
import Header from "../components/headerComponent";

function MasterPage() {
	const paths = useLocation().pathname.split("/");
	const id_mast = paths[1];

	const db_main = useSelector((state) => state.mainDatabase);
	const uiState = useSelector((state) => state.uiState);
	const dispatch = useDispatch();

	var style = {
		isOpen: {
			width: "calc(100% - 300px)",
			marginLeft: "300px",
		},
		isClosed: {
			marginLeft: "0px",
		},
	};

	function MasterWeaponList({ items, index }) {
		function calcProc(id_cat) {
			let n = 0;
			let length = 0;
			db_main[id_cat - 1].weapons.map((weapon) => {
				n = n + weapon.camos[id_mast].filter(Boolean).length;
				length = length + weapon.camos[id_mast].length;
				return n;
			});
			const percentage = (n / length) * 100;
			return Math.round(percentage) + "%";
		}

		function calcProcWeap(id_cat, id_weap) {
			const array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast];
			const percentage = (array.filter(Boolean).length / array.length) * 100;
			return Math.round(percentage) + "%";
		}

		return (
			<div className="tracker_master_container" key={items.id}>
				<div className="tracker_master_container_progress">
					<div className="tracker_master_container_progress_text" onClick={() => dispatch({ type: "TOGGLE_MASTER_COLLAPSIBLE", mast: id_mast, id: index })}>
						<div className="tracker_master_container_progress_text_name">{"▼ " + items.name.toUpperCase()}</div>
						<div className="tracker_master_container_progress_text_percentage">{calcProc(items.id)}</div>
					</div>
					<div className="tracker_master_container_progress_bar">
						<div className="tracker_master_container_progress_bar_yellow" style={{ width: calcProc(items.id) }} />
					</div>
				</div>

				<Collapsible open={id_mast === "dm" ? uiState.masterCollapsibleIsOpen.dm[index] ? true : false : uiState.masterCollapsibleIsOpen.da[index] ? true : false} transitionTime={100}>
					<div className="tracker_master_container_weaponlist">
						{items.weapons.map((weapon) => (
							<div className="tracker_master_container_weaponlist_weaponcontainer" key={weapon.id}>
								<Link className="tracker_master_container_weaponlist_weaponcontainer_card" to={"/weapon/" + id_mast + "_" + items.id + "_" + weapon.id} style={weapon.name.length > 10 ? { fontSize: 2 + "vh" } : {}}>
									{weapon.name.toUpperCase()}
								</Link>
								<div className="tracker_master_container_weaponlist_weaponcontainer_yellowbar" style={{ width: calcProcWeap(items.id, weapon.id) }}></div>
								<div className="tracker_master_container_weaponlist_weaponcontainer_greybar"></div>
							</div>
						))}
					</div>
				</Collapsible>
			</div>
		);
	}

	return (
		<div className="tracker_container" style={uiState.isOpen ? style.isOpen : style.isClosed}>
			<Header />
			<div className="tracker_master">
				{db_main.map((items, index) => (
					<MasterWeaponList items={items} index={index} key={items.id} />
				))}
			</div>
		</div>
	);
}

export default MasterPage;
