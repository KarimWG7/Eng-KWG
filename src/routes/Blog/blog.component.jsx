import React, { useEffect } from "react";
import classes from "./blog.module.css";
import PostsPreview from "../../components/posts-preview/posts-preview.component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlogCategories,
  selectBlogCategoriesPosts,
} from "../../store/blogCategoriesSlice/blogCatgeories.selector";
import { getCategoryPostsAsync } from "../../store/blogCategoriesSlice/blogCategories.reducer";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const LABELS = ["فيزياء", "كيمياء", "رياضيات", "الكترونيات"];

const Blog = () => {
  const params = useParams();
  if (!LABELS.includes(params.category)) {
    return <Navigate to="/not-found" />;
  }

  return (
    <>
      <section>
        <ul className={classes.classification}>
          {LABELS.map((label) => {
            return (
              <NavLink
                to={"/blog/" + label}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                key={label}
              >
                <li>{label}</li>
              </NavLink>
            );
          })}
        </ul>
        <CategoryPreview category={params.category} />
      </section>
    </>
  );
};
 
export default Blog;
