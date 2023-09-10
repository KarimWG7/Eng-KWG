import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostPreview from "../../components/post-preview/post-preview.component";
import { getPostById } from "../../utils/blogger";

const PostDetail = () => {
  const [post, setPost] = useState({ content: "" });
  const params = useParams();
  useEffect(() => {
    const getPost = async () => {
      const post = await getPostById(params.postId);
      setPost(post);
    };
    getPost();
  }, []);
  return <PostPreview post={post} />;
};

export default PostDetail;
