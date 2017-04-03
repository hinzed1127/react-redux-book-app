// State argument isn't application state,
// ONLY state this reducer is responsible for.
// In this case, this only is the active-book part of state
export default function(state = null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
		default:
			return state;
	}
}