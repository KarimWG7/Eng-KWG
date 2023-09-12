import React, { useEffect } from "react";
import classes from "./blog.module.css";
import PostsPreview from "../../components/posts-preview/posts-preview.component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlogCategories,
  selectBlogCategoriesPosts,
} from "../../store/blogCategoriesSlice/blogCatgeories.selector";
import { getCategoryPostsAsync } from "../../store/blogCategoriesSlice/blogCategories.reducer";

const LABELS = ["فيزياء", "كيمياء", "رياضيات", "الكترونيات"];

const Blog = () => {
  const dispatch = useDispatch();
  // const categories = useSelector(selectBlogCategories);
  const blogCategoriesPosts = useSelector(selectBlogCategoriesPosts);
  const isLoading = useSelector((state) => state.blogCategories.isLoading);
  const posts = blogCategoriesPosts["كيمياء"] || [];
  useEffect(() => {
    if (posts.length > 0) return;
    dispatch(getCategoryPostsAsync("كيمياء"));
  }, []);
  return (
    <>
      <section>
        <ul className={classes.classification}>
          {LABELS.map((label) => {
            return (
              <li
                className={label === "كيمياء" ? classes.active : ""}
                key={label}
              >
                <button>{label}</button>
              </li>
            );
          })}
        </ul>
        <PostsPreview posts={posts} isLoading={isLoading} />
      </section>
    </>
  );
};

export default Blog;
