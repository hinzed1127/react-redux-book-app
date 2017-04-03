export function selectBook(book) {
	// selectBook is an ActionCreator
	// @returns action An object with a type property
	// {type: 'describes the purpose of the action',
	//  payload: 'piece of data that describes the action being undertaken' }
	return {
		type: 'BOOK_SELECTED',
		//  ^^^^ standard way to name actions (this gets abstracted to constants)
		payload: book
	};
}