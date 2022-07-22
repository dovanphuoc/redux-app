import { addNewPost } from "../constants/getPost";

export const addPostAction = post => {
	return {
		type: addNewPost.ADD_NEW_POST,
		payload: post,
	};
};
