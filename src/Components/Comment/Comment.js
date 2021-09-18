import React from "react";
import "./Comment.css";

function Comment(props) {
  return (
    <div>
      {props.comments.map((comment) => {
        return (
          <div>
            <span className="comment-style">{comment.username}</span>{" "}
            <span>{comment.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
