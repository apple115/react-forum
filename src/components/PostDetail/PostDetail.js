// PostDetail.js
import React from "react";
import { Card, Typography } from "antd";
import ReplyForm from "./ReplyForm";
import "./PostDetail.css";

const { Title, Text } = Typography;

function PostDetail({ post }) {
  const { title, author, timestamp, content } = {
    title: "My first post",
    author: "John Doe",
    timestamp: "2021-01-01 12:00:00",
    content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed euismod,nunc vel aliquam mattis, elit elit lacinia nunc,ut maximus nisl est a nunc.`,
  };

  console.log(content);

  return (
    <Card className="post-detail" title={<Title level={2}>{title}</Title>}>
      <Text>
        <strong>Author:</strong> {author}
        <br /> <strong>Published:</strong> {timestamp}
      </Text>
      <br />

      <Text style={{ marginTop: 16, whiteSpace: "pre-line" }}>{content}</Text>

      <Title level={3} style={{ marginTop: 24 }}>
        Replies
      </Title>
      {/* Display replies here */}
      <ReplyForm />
    </Card>
  );
}

export default PostDetail;
