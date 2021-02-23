import database from "../data/database.json";

const mainDatabase = (state = database, action) => {
	let selectedArray = [];
	let n = 0;
	switch (action.type) {
		case "TOGGLE_CAMO":
			// CHANGING EXACT CAMO ON TRUE
			selectedArray = state[action.id_cat - 1].weapons[action.id_weap - 1].camos[action.id_mast];
			selectedArray[action.id_camo - 1] = !selectedArray[action.id_camo - 1];
			// CHANGING WEAPON ON COMPLETE IF ALL CAMOS TRUE
			if (selectedArray.filter(Boolean).length === selectedArray.length) {
				state[action.id_cat - 1].weapons[action.id_weap - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].weapons[action.id_weap - 1].completed[action.id_mast] = false;
			}
			// CHANGING CATEGORY ON COMPLETE IF ALL WEAPONS TRUE
			state[action.id_cat - 1].weapons.map((weapon) => {
				if (weapon.completed[action.id_mast] === true) {
					n++;
				}
				return n
			});
			if (n === state[action.id_cat - 1].weapons.length) {
				state[action.id_cat - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].completed[action.id_mast] = false;
			}
			return state.map((item) => {
				return item;
			});
		case "TOGGLE_CATEG":
			// CHANGING EXACT CATEGORY ON TRUE
			state[action.id_cat - 1].weapons[action.id_weap - 1].camos[action.id_mast] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
			selectedArray = state[action.id_cat - 1].weapons[action.id_weap - 1].camos[action.id_mast];
			// CHANGING WEAPON ON COMPLETE IF ALL CAMOS TRUE
			if (selectedArray.filter(Boolean).length === selectedArray.length) {
				state[action.id_cat - 1].weapons[action.id_weap - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].weapons[action.id_weap - 1].completed[action.id_mast] = false;
			}
			// CHANGING CATEGORY ON COMPLETE IF ALL WEAPONS TRUE
			state[action.id_cat - 1].weapons.map((weapon) => {
				if (weapon.completed[action.id_mast] === true) {
					n++;
				}
				return n
			});
			if (n === state[action.id_cat - 1].weapons.length) {
				state[action.id_cat - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].completed[action.id_mast] = false;
			}
			return state.map((item) => {
				return item;
			});
		default:
			return state;
	}
};

export default mainDatabase;
