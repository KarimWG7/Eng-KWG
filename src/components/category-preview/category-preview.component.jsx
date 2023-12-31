import React from "react";
import PostsPreview from "../posts-preview/posts-preview.component";
import { useGetCategoryPostsQuery } from "../../store/boggerApi/bloggerApi";
import Error from "../error/error.component";

const CategoryPreview = ({ category }) => {
  const { data, isError, error, isFetching, isSuccess, refetch } =
    useGetCategoryPostsQuery(category);

  return (
    <>
      {isError && <Error error={error} refetch={refetch} />}
      {(isSuccess || isFetching) && (
        <PostsPreview posts={data?.items} isLoading={isFetching} />
      )}
    </>
  );
};

export default CategoryPreview;
