import React, { useState } from "react";
import { Input, Button, Space } from 'antd';
import "./ReplyForm.css";

function ReplyForm() {
 const [replyContent, setReplyContent] = useState("");

 const handleReplySubmit = () => {
  console.log("Submitting reply:", replyContent);
  setReplyContent("");
 };

 return (
  <div className="reply-form">
    <Input.TextArea
      value={replyContent}
      onChange={(e) => setReplyContent(e.target.value)}
      placeholder="Type your reply here..."
    />
    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
      <Button onClick={handleReplySubmit}>Submit Reply</Button>
    </Space>
  </div>
 );
}

export default ReplyForm;

