import { useEffect, useState } from "react";
import AboutBlog from "../../components/about-blog/about-blog.compponent";
import PostsPreview from "../../components/posts-preview/posts-preview.component";
import { getLatestPosts } from "../../utils/blogger";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getLatestPosts();
      setPosts(data);
    };
    getData();
  }, []);
  return (
    <main className="container">
      <AboutBlog />
      <PostsPreview posts={posts}/>;
    </main>
  );
};

export default Home;
