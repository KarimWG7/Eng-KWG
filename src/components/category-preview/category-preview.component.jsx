import React from "react";
import PostsPreview from "../posts-preview/posts-preview.component";
import { useGetCategoryPostsQuery } from "../../store/boggerApi/bloggerApi";

const CategoryPreview = ({ category }) => {
  const { data, isError, error, isFetching, isSuccess } =
    useGetCategoryPostsQuery(category);

  return (
    <>
      {isError && <p>{error.error}</p>}
      {(isSuccess || isFetching) && (
        <PostsPreview posts={data?.items} isLoading={isFetching} />
      )}
    </>
  );
};

export default CategoryPreview;
