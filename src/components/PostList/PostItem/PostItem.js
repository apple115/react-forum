// PostItem.js
import React from "react";
import "./PostItem.css";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  const { id, title, author, timestamp } = post;

  return (
    <Link to={`/post/${id}`} className="post-item-link">
      <div className="post-item">
        <h3>{title}</h3>
        <p>
          <strong>Author:</strong> {author} | <strong>Published:</strong>{" "}
          {timestamp}
        </p>
      </div>
    </Link>
  );
}

export default PostItem;
