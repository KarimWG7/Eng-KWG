import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/navigation.component";

const App = () => {
  // const [posts, setPosts] = useState([]);
  const [isNavOpened, setIsNavOpened] = useState(true);
  // useEffect(() => {
  //   const blogId = process.env.REACT_APP_BLOGGER_BLOG_ID;
  //   const ApiKey = process.env.REACT_APP_BLOGGER_API_KEY;
  //   const getBlogs = async () => {
  //     const res = await fetch(
  //       `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${ApiKey}`
  //     );
  //     const data = await res.json();
  //     setPosts(data.items);
  //   };
  //   getBlogs();
  // }, []);
  return (
    <>
      <button
        onClick={() => {
          setIsNavOpened((prevState) => {
            return !prevState;
          });
        }}
      >
        nav
      </button>
      <Navigation isNavOpened={isNavOpened} />;
    </>
  );
};

export default App;
