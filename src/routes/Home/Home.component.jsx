import { useEffect } from "react";
import AboutBlog from "../../components/about-blog/about-blog.compponent";
import PostsPreview from "../../components/posts-preview/posts-preview.component";
import { useDispatch, useSelector } from "react-redux";
import { getData, postsActions } from "../../store/postsSlice/posts.reducer";
import { selectPosts } from "../../store/postsSlice/posts.selector";
import { notificationActions } from "../../store/notificationSlice/notification.reducer";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  useEffect(() => {
    if (!navigator.onLine) {
      dispatch(postsActions.getPostsFailed("Please connect to the internet"));
      dispatch(
        notificationActions.showNotification({
          message: "Please connect to the internet",
          statusCode: 400,
        })
      );
      return;
    }
    if (posts.length > 0) return;
    dispatch(getData());
  }, []);
  return (
    <main className="container">
      <AboutBlog />
      {error ? (
        <p>{error}</p>
      ) : (
        <PostsPreview posts={posts} isLoading={isLoading} />
      )}
    </main>
  );
};

export default Home;
