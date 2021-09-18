import React from "react";
import "./Post.css";
import Comment from "../Comment/Comment"

const Post = (props) => {
  return (
    <div className="posts-container-wrapper">
      <div className="post-border">
        <div className="post-header">
          <div className="post-thumb-wrapper">
            <img
              src={props.post.thumbnailUrl}
              alt="avatar"
              className="post-thumb"
            />
          </div>
          <h2>{props.post.username}</h2>
        </div>
        <div className="post-image-wrapper">
          <img
            src={props.post.imageUrl}
            alt="post"
            className="post-image"
          ></img>
        </div>

        <Comment comments={props.post.comments} />
      </div>
    </div>
  );
};

export default Post;
