import { getPost } from "../constants/getPost";

const initialState = {
	posts: [],
};
export const postReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case getPost.GET_POSTS: {
			return {
				...state,
				posts: payload,
			};
		}
		default:
			return state;
	}
};
