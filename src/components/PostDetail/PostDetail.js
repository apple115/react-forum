// PostDetail.js
import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import ReplyForm from "./ReplyForm";
import "./PostDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const { Title, Text } = Typography;

function PostDetail() {
  const [post, setPost] = useState([]);

  const { id } = useParams();
  // const { title, author, timestamp, content } = {
  //   title: "My first post",
  //   author: "John Doe",
  //   timestamp: "2021-01-01 12:00:00",
  //   content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed euismod,nunc vel aliquam mattis, elit elit lacinia nunc,ut maximus nisl est a nunc.`,
  // };
  // TODO: Fetch post detail by ID
  useEffect(() => {
    // Define an async function to fetch post details
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3001/posts/${id}`); // Replace with your API endpoint
        //FIXME:  return none have no data
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post detail:", error);
      }
    };

    // Call the async function
    fetchPostDetail();
  }, [id]);

  const { title, author, timestamp, body } = post;

  return (
    <Card className="post-detail" title={<Title level={2}>{title}</Title>}>
      <Text>
        <strong>Author:</strong> {author}
        <br /> <strong>Published:</strong> {timestamp}
      </Text>
      <br />

      <Text style={{ marginTop: 16, whiteSpace: "pre-line" }}>{body}</Text>

      <Title level={3} style={{ marginTop: 24 }}>
        Replies
      </Title>
      {/* Display replies here */}
      <ReplyForm />
    </Card>
  );
}

export default PostDetail;
