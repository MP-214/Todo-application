const INITIAL_VALUE = {
	list: [],
};

const TodoReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const { id, data } = action.payload;
			return {
				...state,
				list: [
					...state.list,
					{
						id: id,
						data: data,
					},
				],
			};
		case "DELETE_TODO":
			const newList = state.list.filter((e) => e.id !== action.id);
			return {
				...state,
				list: newList,
			};

		case "REMOVE_TODO":
			return {
				...state,
				list: [],
			};
		default:
			return state;
	}
};
export default TodoReducer;
