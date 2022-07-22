import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getAllPosts } from "../../redux/actions/postAction";
const Post = () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.allPosts.posts);
	const getListPosts = async () => {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		dispatch(getAllPosts(response.data));
	};
	useEffect(() => {
		getListPosts();
	}, []);
	return (
		<div className="wrapper">
			{posts.map(post => (
				<div key={post.id}>
					<p>{post.title}</p>
					<p>{post.body}</p>{" "}
				</div>
			))}
		</div>
	);
};

export default Post;
