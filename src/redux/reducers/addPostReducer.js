import { addNewPost } from "../constants/getPost";

const initialState = {
	addNewPost: "add-new-post",
};
export const addPostReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case addNewPost.ADD_NEW_POST: {
			return {
				...state,
				post: payload,
			};
		}
		default:
			return state;
	}
};
