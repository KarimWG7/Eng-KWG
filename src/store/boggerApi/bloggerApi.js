import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_BLOGGER_API_KEY;
const blogId = process.env.REACT_APP_BLOGGER_BLOG_ID;
const bloggerUrl = "https://www.googleapis.com/blogger/v3/blogs/" + blogId;

export const bloggerApi = createApi({
  reducerPath: "bloggerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: bloggerUrl,
  }),
  endpoints: (builder) => ({
    getLatestPosts: builder.query({
      query: () => {
        let url = "posts?";
        const params = {
          key: apiKey,
          fetchImages: true,
          fields: "items(kind,id,published,title,images,labels)",
        };
        return url + new URLSearchParams(params);
      },
    }),
    getCategoryPosts: builder.query({
      query: (category) => {
        let url = "posts?";
        const params = {
          key: apiKey,
          labels: [category],
          fetchImages: true,
          fields: "items(kind,id,published,title,images,labels)",
        };
        return url + new URLSearchParams(params);
      },
    }),
    getPostById: builder.query({
      query: (id) => {
        let url = `/posts/${id}?`;
        const params = {
          key: apiKey,
          fetchImages: true,
        };
        return url + new URLSearchParams(params);
      },
    }),
  }),
});

export const {
  useGetLatestPostsQuery,
  useGetCategoryPostsQuery,
  useGetPostByIdQuery,
} = bloggerApi;
