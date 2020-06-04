// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
    const [ comments, setComment ] = useState(props);
  // Add state for the comments
    console.log("comments: ",
        props.comments
        );
  return (
    <div>
        {
            props.comments.map(
                (el, index) => {
                    return (
                    <Comment key={index} comment={el}/>
                    )}
                )
        }
        {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
