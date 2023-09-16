import { useParams } from "react-router-dom";
import PostPreview from "../../components/post-preview/post-preview.component";
import { useGetPostByIdQuery } from "../../store/boggerApi/bloggerApi";
import Spinner from "../../components/spinner/spinner.component";

const PostDetail = () => {
  const params = useParams();
  const { data, error, isFetching, isError } = useGetPostByIdQuery(
    params.postId
  );

  return isFetching ? <Spinner /> : <PostPreview post={data} />;
};

export default PostDetail;
