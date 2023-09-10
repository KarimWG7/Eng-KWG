import React from 'react'
import classes from "./blog.module.css";
import AboutBlog from "../../components/about-blog/about-blog.compponent";
import PostsPreview from "../../components/posts-preview/posts-preview.component";

const LABELS = ["فيزياء", "كيمياء", "رياضيات", "الكترونيات"];

const Blog = () => {
  return (
    <>
      <section>
        <ul className={classes.classification}>
          {LABELS.map((label) => {
            return (
              <li className={label === "رياضيات" && classes.active} key={label}>
                <button>{label}</button>
              </li>
            );
          })}
        </ul>
        <PostsPreview />
      </section>
    </>
  );
};

export default Blog