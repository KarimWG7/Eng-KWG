import { useEffect } from "react";
import AboutBlog from "../../components/about-blog/about-blog.compponent";
import PostsPreview from "../../components/posts-preview/posts-preview.component";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/postsSlice/posts.reducer";
import { selectPosts } from "../../store/postsSlice/posts.selector";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  useEffect(() => {
    if (posts.length > 0) return;
    dispatch(getData());
  }, []);
  return (
    <main className="container">
      <AboutBlog />
      <PostsPreview posts={posts} isLoading={isLoading} />;
    </main>
  );
};

export default Home;
