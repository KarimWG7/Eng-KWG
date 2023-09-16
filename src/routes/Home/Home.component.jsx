import AboutBlog from "../../components/about-blog/about-blog.compponent";
import PostsPreview from "../../components/posts-preview/posts-preview.component";

import { useGetLatestPostsQuery } from "../../store/boggerApi/bloggerApi";

const Home = () => {
  const { data, isError, isFetching, error } = useGetLatestPostsQuery();
  return (
    <section className="container">
      <AboutBlog />
      {isError ? (
        <p>{error.error}</p>
      ) : (
        <PostsPreview posts={data?.items} isLoading={isFetching} />
      )}
    </section>
  );
};

export default Home;
