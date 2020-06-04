import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";

const App = () => {

  return (
    <div className="App">
      <SearchBar/>
      <PostsPage/>
    </div>
  );
};

export default App;
