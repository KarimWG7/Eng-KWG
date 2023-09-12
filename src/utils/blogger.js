const apiKey = process.env.REACT_APP_BLOGGER_API_KEY;
const blogId = process.env.REACT_APP_BLOGGER_BLOG_ID;
const bloggerUrl = "https://www.googleapis.com/blogger/v3/blogs/" + blogId;

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok)
      throw new Error({
        statusCode: res.status,
        message: "Something went wrong while fetching the posts!",
      });
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getLatestPosts = async () => {
  const params = {
    key: apiKey,
    fetchImages: true,
    fields: "items(kind,id,published,title,images,labels)",
  };
  const fetchUrl = bloggerUrl + "/posts?" + new URLSearchParams(params);
  const data = await fetchData(fetchUrl);
  return data.items;
};

export const getPostById = async (postId) => {
  const fetchUrl = bloggerUrl + `/posts/${postId}?key=` + apiKey;
  const post = await fetchData(fetchUrl);
  return post;
};

export const getCategoryPosts = async (category) => {
  const params = {
    key: apiKey,
    labels: [category],
    fetchImages: true,
    fields: "items(kind,id,published,title,images,labels)",
  };
  const fetchUrl = bloggerUrl + "/posts?" + new URLSearchParams(params);

  const data = await fetchData(fetchUrl);
  return data.items;
};
