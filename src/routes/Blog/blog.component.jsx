import { NavLink, Navigate, useParams } from "react-router-dom";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import classes from "./blog.module.css";

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
