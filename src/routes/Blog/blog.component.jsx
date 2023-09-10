import React, { useEffect, useState } from "react";
import classes from "./blog.module.css";
import AboutBlog from "../../components/about-blog/about-blog.compponent";
import PostsPreview from "../../components/posts-preview/posts-preview.component";
import { getCategoryPosts } from "../../utils/blogger";

const LABELS = ["فيزياء", "كيمياء", "رياضيات", "الكترونيات"];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const posts = await getCategoryPosts("كيمياء");
      setPosts(posts);
    };
    getData();
  }, []);
  return (
    <>
      <section>
        <ul className={classes.classification}>
          {LABELS.map((label) => {
            return (
              <li
                className={label === "رياضيات" ? classes.active : ""}
                key={label}
              >
                <button>{label}</button>
              </li>
            );
          })}
        </ul>
        <PostsPreview posts={posts} />
      </section>
    </>
  );
};

export default Blog;
