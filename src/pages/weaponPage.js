import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../components/headerComponent";

function WeaponPage() {
	const paths = useLocation().pathname.split("/");
	const [id_mast, id_cat, id_weap] = paths[2].split("_");

	const db_main = useSelector((state) => state.mainDatabase);
	const db_camos = useSelector((state) => (id_mast === "dm" ? state.dmDatabase : state.daDatabase));
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

	function calcProc(id_camocat) {
		let array = [];
		if (id_camocat === 1) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast].slice(0, 5);
		} else if (id_camocat === 2) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast].slice(5, 10);
		} else if (id_camocat === 3) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast].slice(10, 15);
		} else if (id_camocat === 4) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast].slice(15, 20);
		} else if (id_camocat === 5) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast].slice(20, 25);
		} else if (id_camocat === 6) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast].slice(25, 30);
		} else if (id_camocat === 7) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast].slice(30, 35);
		} else if (id_camocat === 8) {
			array = db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast];
		}
		const percentage = (array.filter(Boolean).length / array.length) * 100;
		return Math.round(percentage) + "%";
	}

	function checkMastery(id_camo) {
		if (id_camo === 36) {
			return db_main[id_cat - 1].weapons[id_weap - 1].completed[id_mast] ? 0 : 1;
		} else if (id_camo === 37) {
			let n = 0;
			db_main[id_cat - 1].weapons.map((weapon) => {
				if (weapon.completed[id_mast] === true) {
					n++;
				}
				return n;
			});
			return n === db_main[id_cat - 1].weapons.length ? 0 : 1;
		} else if (id_camo === 38) {
			let n = 0;
			db_main.map((weapon) => {
				if (weapon.completed[id_mast] === true) {
					n++;
				}
				return n;
			});
			return n === db_main.length ? 0 : 1;
		}
	}

	// .replace("../", "")

	const [show, setShow] = React.useState([false, false, false, false, false, false, false, false]);

	function setShowCheck(index) {
		if (index !== 7) {
			const array = show;
			array[index] = !array[index];
			setShow([...show, show]);
		}
	}

	return (
		<div className="tracker_container" style={uiState.isOpen ? style.isOpen : style.isClosed}>
			<Header />
			<div className="tracker_weapon">
				<div className="tracker_weapon_wrapper">
					{db_camos.map((item, index) => (
						<div className="tracker_weapon_wrapper_container" onMouseEnter={() => setShowCheck(index)} onMouseLeave={() => setShowCheck(index)} key={item.id}>
							<div className="tracker_weapon_wrapper_container_text">
								<div className="tracker_weapon_wrapper_container_text_name">{item.name.toUpperCase()}</div>
								{index !== 7 && (
									<div className="tracker_weapon_wrapper_container_text_check" style={{ opacity: show[index] ? "1" : "0" }} onClick={() => dispatch({ type: "TOGGLE_CAMO_CATEG", id_cat: id_cat, id_weap: id_weap, id_camo_cat: index + 1, id_mast: id_mast })}>
										<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 448 448">
											<polygon points="341.333,192.96 341.333,381.12 42.667,381.12 42.667,82.453 308.693,82.453 355.627,39.787 0,39.787 0,423.787 384,423.787 384,153.707" />
											<polygon points="417.493,24.213 186.027,234.56 113.493,162.24 85.333,190.4 187.947,293.013 448,54.08" />
										</svg>
									</div>
								)}
								<div className="tracker_weapon_wrapper_container_text_percentage">{calcProc(item.id)}</div>
							</div>
							<div className="tracker_weapon_wrapper_container_bar">
								<div className="tracker_weapon_wrapper_container_bar_yellow" style={{ width: calcProc(item.id) }}></div>
							</div>
							<div className="tracker_weapon_wrapper_container_camocontainer">
								{item.camos.map((camo) => {
									if (camo.id === 36 || camo.id === 37 || camo.id === 38) {
										return (
											<div className={"tracker_weapon_wrapper_container_camocontainer_camo" + " " + "tracker_weapon_wrapper_container_camocontainer_master"} key={camo.id}>
												<div className="tracker_weapon_wrapper_container_camocontainer_camo_lock" style={{ opacity: checkMastery(camo.id) }}>
													<svg height="512pt" viewBox="-64 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
														<path d="m336 192h-16v-64c0-70.59375-57.40625-128-128-128s-128 57.40625-128 128v64h-16c-26.453125 0-48 21.523438-48 48v224c0 26.476562 21.546875 48 48 48h288c26.453125 0 48-21.523438 48-48v-224c0-26.476562-21.546875-48-48-48zm-229.332031-64c0-47.0625 38.269531-85.332031 85.332031-85.332031s85.332031 38.269531 85.332031 85.332031v64h-170.664062zm0 0" />
													</svg>
												</div>
												<img className="tracker_weapon_wrapper_container_camocontainer_camo_img" src={"camo-tracker/" + camo.img} alt="camo_img" />
											</div>
										);
									} else {
										return (
											<div className="tracker_weapon_wrapper_container_camocontainer_camo" onClick={() => dispatch({ type: "TOGGLE_CAMO", id_cat: id_cat, id_weap: id_weap, id_camo: camo.id, id_mast: id_mast })} key={camo.id}>
												<div className="tracker_weapon_wrapper_container_camocontainer_camo_lock" style={{ opacity: db_main[id_cat - 1].weapons[id_weap - 1].camos[id_mast][camo.id - 1] ? 0 : 1 }}>
													<svg height="512pt" viewBox="-64 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
														<path d="m336 192h-16v-64c0-70.59375-57.40625-128-128-128s-128 57.40625-128 128v64h-16c-26.453125 0-48 21.523438-48 48v224c0 26.476562 21.546875 48 48 48h288c26.453125 0 48-21.523438 48-48v-224c0-26.476562-21.546875-48-48-48zm-229.332031-64c0-47.0625 38.269531-85.332031 85.332031-85.332031s85.332031 38.269531 85.332031 85.332031v64h-170.664062zm0 0" />
													</svg>
												</div>
												<img className="tracker_weapon_wrapper_container_camocontainer_camo_img" src={"camo-tracker/" + camo.img} alt="camo_img" />
											</div>
										);
									}
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WeaponPage;
