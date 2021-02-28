const sidebar = {
	isOpen: true,
	collapsibleIsOpen: {
		dm: [false, false, false, false, false, false, false, false, false, false, false],
		da: [false, false, false, false, false, false, false, false, false, false, false],
	},
	masterCollapsibleIsOpen: {
		dm: [false, false, false, false, false, false, false, false, false, false],
		da: [false, false, false, false, false, false, false, false, false, false],
	},
	settings: false,
};

const sidebarState = (state = sidebar, action) => {
	let newArray = [];
	switch (action.type) {
		case "TOGGLE_SIDEBAR":
			return { ...state, isOpen: !state.isOpen };
		case "TOGGLE_COLLAPSIBLE":
			if (action.mast === "dm") {
				newArray = state.collapsibleIsOpen.dm;
				newArray[action.id] = !newArray[action.id];
				return {
					...state,
					collapsibleIsOpen: {
						...state.collapsibleIsOpen,
						dm: newArray,
					},
				};
			} else if (action.mast === "da") {
				newArray = state.collapsibleIsOpen.da;
				newArray[action.id] = !newArray[action.id];
				return {
					...state,
					collapsibleIsOpen: {
						...state.collapsibleIsOpen,
						da: newArray,
					},
				};
			}
		case "TOGGLE_MASTER_COLLAPSIBLE":
			if (action.mast === "dm") {
				newArray = state.masterCollapsibleIsOpen.dm;
				newArray[action.id] = !newArray[action.id];
				return {
					...state,
					masterCollapsibleIsOpen: {
						...state.masterCollapsibleIsOpen,
						dm: newArray,
					},
				};
			} else if (action.mast === "da") {
				newArray = state.masterCollapsibleIsOpen.da;
				newArray[action.id] = !newArray[action.id];
				return {
					...state,
					masterCollapsibleIsOpen: {
						...state.masterCollapsibleIsOpen,
						da: newArray,
					},
				};
			}
		case "TOGGLE_SETTINGS":
			return { ...state, settings: !state.settings };
		default:
			return state;
	}
};

export default sidebarState;
