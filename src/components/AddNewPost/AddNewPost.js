import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostReducer } from "../../redux/reducers/addPostReducer";
const AddNewPost = () => {
	const dispatch = useDispatch();
	const addNewPost = useSelector(state => state.addNewPost.addNewPost);
	const handleAddPost = () => {
		dispatch(addPostReducer());
	};
	console.log(addNewPost);
	return (
		<>
			<button onClick={handleAddPost}>Add new post</button>
		</>
	);
};

export default AddNewPost;
