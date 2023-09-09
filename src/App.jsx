import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/navigation.component";
import Button from "./components/button/button.component";
import Home from "./routes/Home/Home.component";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./routes/post-detail/post-detail.comopnent";
import Blog from "./routes/Blog/blog.component";
import About from "./routes/About/about.component";
import Contact from "./routes/Contact/contact.component";
import Header from "./components/header/header.component";
import "./app.css";

const App = () => {
  // const [posts, setPosts] = useState([]);
  const [isNavOpened, setIsNavOpened] = useState(true);
  // useEffect(() => {
  //   const blogId = process.env.REACT_APP_BLOGGER_BLOG_ID;
  //   const ApiKey = process.env.REACT_APP_BLOGGER_API_KEY;
  //   const bloggerUrl = "https://www.googleapis.com/blogger/v3/blogs/" + blogId;
  //   const params = {
  //     key: ApiKey,
  //     fetchImages: true,
  //     fields: "items(kind,id,published,title,images,labels)",
  //   };
  //   const fetchUrl = bloggerUrl + "/posts?" + new URLSearchParams(params);
  //   console.log(fetchUrl);
  //   const getBlogs = async () => {
  //     const res = await fetch(fetchUrl);
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   getBlogs();
  // }, []);
  return (
    <div className="app">
      <main className="container">
        <Header setIsNavOpen={setIsNavOpened} isNavOpen={isNavOpened} />
        {isNavOpened && <Navigation isNavOpened={isNavOpened} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
