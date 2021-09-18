import "./App.css";
import Post from "./Components/Post/Post";
import postsList from "./data";
import Navbar from "./Components/Navbar/Navbar";

// Props - propietati
function App() {
  return (
    // JSX SYNTAX -> HTML IN JS (OR XML)

    <div className="App">

    <Navbar/>

      <h1>Instagram Clone</h1>

      {/* <Post post={postsList[0]} />
    <Post post={postsList[1]} />
    <Post post={postsList[2]} />
    <Post post={postsList[3]} />
    <Post post={postsList[4]} /> */}
      {/* <Post paragraph="Hello" /> */}

      {postsList.map((element) => (
        <Post post={element} key={element.id} />
      ))}
    </div>
  );
}

export default App;
