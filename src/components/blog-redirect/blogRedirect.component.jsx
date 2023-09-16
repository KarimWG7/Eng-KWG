import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/blog") {
      navigate("/blog/كيمياء");
    }
  }, []);

  return <div></div>;
};

export default Blog;
