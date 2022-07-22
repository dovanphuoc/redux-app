import { addNewPost } from "../constants/addNewPost";

const initialState = {
	addNewPost: "add-new-post",
};
export const addPostReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case addNewPost: {
			return {
				...state,
				post: payload,
			};
		}
		default:
			return state;
	}
};
