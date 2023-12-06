import React, { useState } from "react";

function ReplyForm() {
  const [replyContent, setReplyContent] = useState("");

  const handleReplySubmit = () => {
    // Handle the submission of the reply content
    console.log("Submitting reply:", replyContent);
    // Clear the reply content after submission
    setReplyContent("");
  };

  return (
    <div className="reply-form">
      <textarea
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        placeholder="Type your reply here..."
      />
      <button onClick={handleReplySubmit}>Submit Reply</button>
    </div>
  );
}

export default ReplyForm;
