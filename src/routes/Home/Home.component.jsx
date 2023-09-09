import AboutBlog from "../../components/about-blog/about-blog.compponent";
import PostsPreview from "../../components/posts-preview/posts-preview.component";

const Home = () => {
  return (
    <main className="container">
      <AboutBlog />
      <PostsPreview />;
    </main>
  );
};

export default Home;
