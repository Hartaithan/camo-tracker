import database from "../data/db_main.json";

const initialState = database;

const mainDatabase = (state = initialState, action) => {
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
				return n;
			});
			if (n === state[action.id_cat - 1].weapons.length) {
				state[action.id_cat - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].completed[action.id_mast] = false;
			}
			return state.map((item) => {
				return item;
			});
		case "TOGGLE_WEAPON":
			// CHANGING EXACT WEAPON ON TRUE
			state[action.id_cat - 1].weapons[action.id_weap - 1].camos[action.id_mast] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
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
				return n;
			});
			if (n === state[action.id_cat - 1].weapons.length) {
				state[action.id_cat - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].completed[action.id_mast] = false;
			}
			return state.map((item) => {
				return item;
			});
		case "TOGGLE_CAMO_CATEG":
			const currentArray = state[action.id_cat - 1].weapons[action.id_weap - 1].camos[action.id_mast];
			console.log("current array" + [currentArray]);
			const completed = [true, true, true, true, true];
			switch (action.id_camo_cat) {
				case 1:
					console.log("id_camo_cat: " + action.id_camo_cat + " case: 1");
					Array.prototype.splice.apply(currentArray, [0, 5].concat(completed));
					console.log(currentArray.length + " array after case: " + currentArray);
					break;
				case 2:
					console.log("id_camo_cat: " + action.id_camo_cat + " case: 2");
					Array.prototype.splice.apply(currentArray, [5, 5].concat(completed));
					console.log(currentArray.length + " array after case: " + currentArray);
					break;
				case 3:
					console.log("id_camo_cat: " + action.id_camo_cat + " case: 3");
					Array.prototype.splice.apply(currentArray, [10, 5].concat(completed));
					console.log(currentArray.length + " array after case: " + currentArray);
					break;
				case 4:
					console.log("id_camo_cat: " + action.id_camo_cat + " case: 4");
					Array.prototype.splice.apply(currentArray, [15, 5].concat(completed));
					console.log(currentArray.length + " array after case: " + currentArray);
					break;
				case 5:
					console.log("id_camo_cat: " + action.id_camo_cat + " case: 5");
					Array.prototype.splice.apply(currentArray, [20, 5].concat(completed));
					console.log(currentArray.length + " array after case: " + currentArray);
					break;
				case 6:
					console.log("id_camo_cat: " + action.id_camo_cat + " case: 6");
					Array.prototype.splice.apply(currentArray, [25, 5].concat(completed));
					console.log(currentArray.length + " array after case: " + currentArray);
					break;
				case 7:
					console.log("id_camo_cat: " + action.id_camo_cat + " case: 7");
					Array.prototype.splice.apply(currentArray, [30, 5].concat(completed));
					console.log(currentArray.length + " array after case: " + currentArray);
					break;
				default:
					console.log("default");
			}
			// CHANGING WEAPON ON COMPLETE IF ALL CAMOS TRUE
			if (currentArray.filter(Boolean).length === currentArray.length) {
				state[action.id_cat - 1].weapons[action.id_weap - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].weapons[action.id_weap - 1].completed[action.id_mast] = false;
			}
			// CHANGING CATEGORY ON COMPLETE IF ALL WEAPONS TRUE
			state[action.id_cat - 1].weapons.map((weapon) => {
				if (weapon.completed[action.id_mast] === true) {
					n++;
				}
				return n;
			});
			if (n === state[action.id_cat - 1].weapons.length) {
				state[action.id_cat - 1].completed[action.id_mast] = true;
			} else {
				state[action.id_cat - 1].completed[action.id_mast] = false;
			}
			return state.map((item) => {
				return item;
			});
		case "RESET_ALL":
			state = initialState;
			return state;
		default:
			return state;
	}
};

export default mainDatabase;
