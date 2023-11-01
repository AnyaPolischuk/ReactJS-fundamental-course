import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { Loader } from "../components/UI/loader/Loader";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, comentsError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
    console.log(response.data)
  })

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <>
      <h1>Страница поста - {params.id}</h1>
        {isCommentsLoading
          ? <Loader />
          :
          <div>
            <div>{post.id} {post.title}</div>
            {comments.map((comm) => (
              <div key={comm.id} style={{marginTop: 15}}>
                <h5>{comm.email}</h5>
                <div style={{fontSize: 15}}>{comm.body}</div>
              </div>
            ))}
          </div>
        }
      
    </>
  )
}