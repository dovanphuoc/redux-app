import { getPost } from "../constants/getPost";

export const getAllPosts = posts => {
	return {
		type: getPost.GET_POSTS,
		payload: posts,
	};
};
