import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import PostData from "../../dummy-data";

const PostsPage = () => {
  const [postData, setPost] = useState(PostData);
  return <div className="posts-container-wrapper">
    {
      postData.map((el,index) =>  <Post key={index} post={el}/> )
    }
  </div>;
};

export default PostsPage;
