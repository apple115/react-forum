// PostItem.js
import React from "react";

function PostItem({ post }) {
  const { title, author, timestamp } = post;

  return (
    <div className="post-item">
      <h3>{title}</h3>
      <p>
        <strong>Author:</strong> {author} | <strong>Published:</strong>{" "}
        {timestamp}
      </p>
    </div>
  );
}

export default PostItem;
