// PostDetail.js
import React from "react";
import ReplyForm from "./ReplyForm";
import "./PostDetail.css";

function PostDetail({ post }) {
  const { title, author, timestamp, content } = post;

  return (
    <div className="post-detail">
      <h2>{title}</h2>
      <p>
        <strong>Author:</strong> {author} | <strong>Published:</strong>{" "}
        {timestamp}
      </p>
      <p>{content}</p>

      <h3>Replies</h3>
      {/* Display replies here */}

      <ReplyForm />
    </div>
  );
}

export default PostDetail;
