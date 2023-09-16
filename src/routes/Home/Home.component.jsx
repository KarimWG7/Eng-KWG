import AboutBlog from "../../components/about-blog/about-blog.compponent";
import Error from "../../components/error/error.component";
import PostsPreview from "../../components/posts-preview/posts-preview.component";

import { useGetLatestPostsQuery } from "../../store/boggerApi/bloggerApi";

const Home = () => {
  const { data, isError, isFetching, error } = useGetLatestPostsQuery();
  console.log(error);
  return (
    <section className="container">
      <AboutBlog />
      {isError ? (
        <Error error={error} />
      ) : (
        <PostsPreview posts={data?.items} isLoading={isFetching} />
      )}
    </section>
  );
};

export default Home;
