import "./App.css";
import AddNewPost from "./components/AddNewPost/AddNewPost";
import Post from "./components/Post/Post";

function App() {
	return (
		<div className="App">
			<Post />
			<AddNewPost />
		</div>
	);
}

export default App;
